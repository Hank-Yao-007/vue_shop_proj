<template>
  <div>
    <h3>权限列表</h3>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-button type="primary">新增权限</el-button>
      <el-table :data="rightsList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="leve1">
          <template slot-scope="scope">
            <el-tag color="#E6A23C" type="info" v-if="scope.row.level==0">一级</el-tag>
            <el-tag color="#FAECD8" type="info" v-else-if="scope.row.level==1">二级</el-tag>
            <el-tag color="#FDF6EC" type="info" v-else>三级</el-tag>
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
      rightsList: []
    }
  },
  created() {
    this.getRighsList()
  },

  methods: {
    async getRighsList() {
      const { data: res } = await this.$http.get('rights/list')
      if (res.meta.status !== 200) return this.$message.error('获取数据失败')
      this.rightsList = res.data
      this.$message.success('获取数据成功')
    }
  }
}
</script>

<style lang="less" scoped>
</style>


