<template>
  <div>
    <h3>角色列表</h3>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-button type="primary">添加角色</el-button>
      <el-table row-key="id" :data="rolesList" border stripe>
        <el-table-column type="expand">
          <!-- 点击展开，显示各级权限 -->
          <template slot-scope="scope">
            <!-- 一级权限 -->
            <el-row
              :class="[ index1==scope.row.children.length-1?'':'tag-bot-border', index1 == 0?'':'tag-top-border', 'tag-vertical-center']"
              v-for="(item1, index1) in scope.row.children"
              :key="item1.id"
            >
              <el-col :span="5">
                <el-tag>{{item1.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                <el-row
                  v-for="(item2, i2) in item1.children"
                  :key="item2.id"
                  :class="[ i2==item1.children.length-1?'':'tag-bot-border', i2 == 0?'':'tag-top-border', 'tag-vertical-center']"
                >
                  <!-- 二级权限 -->
                  <el-col :span="10">
                    <el-tag type="success">{{item2.authName}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>

                  <!-- 三级权限 -->
                  <el-col :span="24">
                    <el-row
                      v-for="(item3, i3) in item2.children"
                      :key="item3.id"
                      :class="[ i3==item2.children.length-1?'':'tag-bot-border', i3 == 0?'':'tag-top-border', 'tag-vertical-center']"
                    >
                      <el-col>
                        <el-tag type="warning">{{item3.authName}}</el-tag>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>

        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column labe1="操作">
          <template>
            <el-button icon="el-icon-edit" type="primary" size="mini">编辑</el-button>
            <el-button icon="el-icon-delete" type="danger" size="mini">删除</el-button>
            <el-button icon="el-icon-setting" type="warning" size="mini">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 保存权限列表的数据
      rolesList: []
    }
  },
  created() {
    this.getRighsList()
  },

  methods: {
    async getRighsList() {
      // 请求角色列表的数据
      const { data: res } = await this.$http.get('roles')
      if (res.meta.status !== 200) return this.$message.error('获取数据失败')
      this.rolesList = res.data
      this.$message.success('获取数据成功')
      console.log(this.rolesList)
    }
  }
}
</script>

<style lang="less" scoped>
.tag-top-border {
  padding-top: 8px;
  // border-top: 1px solid #EBEEF5;
}
.tag-bot-border {
  padding-bottom: 8px;
  border-bottom: 1px solid #ebeef5;
}
// 标签垂直居中
.tag-vertical-center {
  display: flex;
  align-items: center;
}
</style>
