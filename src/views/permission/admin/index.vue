<!--
 * @Date: 2023-08-12 15:00:32
 * @LastEditors: wuyanfeiying
-->
<template>
  <page-container>
    <app-card>
      <template #header>
        数据筛选
      </template>
      <el-form
        :inline="true"
        ref="form"
        :model="listParams"
        :disabled="listLoading"
        @submit.prevent="handleQuery"
      >
        <el-form-item label="状态">
          <el-select
            v-model="listParams.status"
            placeholder="请选择"
            clearable
          >
            <el-option
              label="全部"
              value=""
            />
            <el-option
              label="显示"
              :value="1"
            />
            <el-option
              label="不显示"
              :value="0"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="管理员名称">
          <el-input
            v-model="listParams.name"
            clearable
            placeholder="请输入身份昵称"
          />
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </app-card>
    <app-card>
      <template #header>
        <el-button
          type="primary"
          @click="formVisible = true"
        >
          添加管理员
        </el-button>
      </template>
      <el-table
        :data="list"
        stripe
        style="width: 100%"
        v-loading="listLoading"
      >
        <el-table-column
          prop="id"
          label="ID"
        />
        <el-table-column
          prop="real_name"
          label="姓名"
        />
        <el-table-column
          prop="account"
          label="账号"
        />
        <el-table-column
          prop="roles"
          label="身份"
          min-width="180"
        >
          <template #default="scope">
            <el-space wrap>
              <el-tag
                class="role-tag"
                v-for="(item) in scope.row.roles.split(',')"
                :key="item"
              >
                {{ item }}
              </el-tag>
            </el-space>
          </template>
        </el-table-column>
        <el-table-column
          label="最后一次登录时间"
          prop="last_time"
        />
        <el-table-column
          label="最后一次登录IP"
          prop="last_ip"
        />
        <el-table-column label="状态">
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              :loading="scope.row.statusLoading"
              @change="handleStatusChange(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          min-width="100"
          align="center"
        >
          <template #default="scope">
            <el-button
              link
              @click="handleUpdate(scope.row.id)"
            >
              编辑
            </el-button>
            <el-popconfirm
              title="确认删除吗?"
              @confirm="handleDelete(scope.row.id)"
            >
              <template #reference>
                <el-button link>
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <app-pagination
        v-model:page="listParams.page"
        v-model:limit="listParams.limit"
        :list-count="listCount"
        :disabled="listLoading"
        :load-list="loadList"
      />
    </app-card>
  </page-container>
  <!-- 子组件并没有主动绑定 v-Modle 子组件也主动触发没有 @closed的
    这里之所以可以触发， 是因为会默认作用到根节点上
    下面的@closed别不能在子组件内部修改 adminID
  -->
  <!-- <admin-form
    v-model="formVisible"
    :admin-id="adminId"
    @closed="adminId = null"
  /> -->

  <!-- 下面的方法 可以在子组件内容 修改 adminID -->
  <admin-form
    v-model="formVisible"
    v-model:admin-id="adminId"
  />
</template>

<script lang="ts" setup>
import { deleteAdmin, getAdmins, updateAdminStatus } from '@/api/admin'
import type { Admin, IListParams } from '@/api/types/admin'
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import AdminForm from './AdminForm.vue'

const list = ref<Admin[]>([]) // 列表数据
const listCount = ref(0)
const listLoading = ref(true)
const formVisible = ref(false)
const adminId = ref<number | null>(null)
const listParams = reactive({ // 列表数据查询参数
  page: 1, // 当前页码
  limit: 10, // 每页大小
  name: '',
  roles: '',
  status: '' as IListParams['status'] // 显性的告诉这个是什么类型,listparams里面声明了一个联合类型，其中包括字符串
})

onMounted(() => {
  loadList()
})

const loadList = async () => {
  listLoading.value = true
  const data = await getAdmins(listParams).finally(() => {
    listLoading.value = false
  })
  data.list.forEach(item => {
    item.statusLoading = false // 控制切换状态的loading效果
  })
  list.value = data.list
  listCount.value = data.count
}

const handleQuery = async () => {
  loadList()
}

const handleDelete = async (id: number) => {
  await deleteAdmin(id)
  ElMessage.success('删除成功')
  loadList()
}

// 切换状态
const handleStatusChange = async (item: Admin) => {
  item.statusLoading = true
  await updateAdminStatus(item.id, item.status).finally(() => {
    item.statusLoading = false
  })
  ElMessage.success(`${item.status === 1 ? '启用' : '禁用'}成功`)
}

// 修改
const handleUpdate = (id: number) => {
  adminId.value = id
  formVisible.value = true
}
</script>

<style lang="scss" scoped></style>
