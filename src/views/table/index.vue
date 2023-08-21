<template>
  <div class="app-container">
    <el-button type="success" icon="el-icon-download" @click="download(0)">导出groupData</el-button>
    <el-button type="success" icon="el-icon-download" @click="download(1)">导出pointData</el-button>
    操作员：
    <el-select
      v-model="value"
      filterable
      remote
      clearable
      reserve-keyword
      placeholder="请输入关键词"
      @change="handleGetDataByUser"
    >
      <el-option
        v-for="item in allUserName"
        :key="item.value"
        :label="item.label"
        :value="item.label"
      >
      </el-option>
    </el-select>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-table
                v-loading="listLoading"
                :data="tableList[props.row.id]"
                element-loading-text="Loading"
                border
                fit
                highlight-current-row
              >
                <el-table-column align="center" label="ID" width="95">
                  <template slot-scope="scope">
                    {{ scope.row.id }}
                  </template>
                </el-table-column>
                <el-table-column label="Vmax" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.maxv }}
                  </template>
                </el-table-column>
                <el-table-column label="t1" width="110" align="center">
                  <template slot-scope="scope">
                    <span>{{ scope.row.t1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Vmin" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.vmin }}
                  </template>
                </el-table-column>

                <el-table-column label="t2" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.t2 }}
                  </template>
                </el-table-column>

                <el-table-column label="t" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.t }}
                  </template>
                </el-table-column>

                <el-table-column label="dh" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.dh }}
                  </template>
                </el-table-column>

                <el-table-column label="vr" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.vr }}
                  </template>
                </el-table-column>

                <el-table-column label="Res" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.springback }}
                  </template>
                </el-table-column>
                <el-table-column label="TAN" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.tan }}
                  </template>
                </el-table-column>

                <el-table-column label="Fmax" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.fmax }}
                  </template>
                </el-table-column>

                <el-table-column label="tf" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.tf }}
                  </template>
                </el-table-column>

                <el-table-column label="Smax" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.smax }}
                  </template>
                </el-table-column>
                <el-table-column label="ts" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.ts }}
                  </template>
                </el-table-column>

                <el-table-column label="K" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.k }}
                  </template>
                </el-table-column>
                <el-table-column label="Tz" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.tz }}
                  </template>
                </el-table-column>
                <!--                <el-table-column label="groupId" width="110" align="center">-->
                <!--                  <template slot-scope="scope">-->
                <!--                    {{ scope.row.groupid }}-->
                <!--                  </template>-->
                <!--                </el-table-column>-->
              </el-table>
            </el-form>
          </template>
        </el-table-column>
        <!--        <el-table-column-->
        <!--          label="ID"-->
        <!--          prop="id">-->
        <!--        </el-table-column>-->
        <el-table-column
          label="操作员"
          align="center"
          prop="username">
        </el-table-column>
        <el-table-column
          label="文件名"
          align="center"
          prop="name">
        </el-table-column>
        <el-table-column
          label="材料"
          align="center"
          prop="material">
        </el-table-column>
        <el-table-column
          label="探头类型"
          align="center"
          prop="impactdevice">
        </el-table-column>
        <el-table-column
          label="方向"
          align="center"
          prop="direction">
        </el-table-column>
        <el-table-column
          label="次数"
          align="center"
          prop="count">
        </el-table-column>
        <el-table-column
          label="硬度标准"
          align="center"
          prop="hardnessstandard">
        </el-table-column>
        <el-table-column
          label="回弹性标准"
          width="110"
          align="center"
          prop="reboundstandard">
        </el-table-column>
        <el-table-column
          label="料号"
          align="center"
          prop="partnumber">
        </el-table-column>
        <el-table-column
          label="温度"
          align="center"
          prop="temperature">
        </el-table-column>
        <el-table-column
          label="平均值"
          align="center"
          prop="averagevalue">
        </el-table-column>
        <el-table-column
          label="vmax平均值"
          width="110"
          align="center"
          prop="vmaxaveragevalue">
        </el-table-column>
        <el-table-column
          label="t1平均值"
          align="center"
          prop="t1averagevalue">
        </el-table-column>
        <el-table-column
          label="vmin平均值"
          width="110"
          align="center"
          prop="vminaveragevalue">
        </el-table-column>
        <el-table-column
          label="t2平均值"
          align="center"
          prop="t2averagevalue">
        </el-table-column>
        <el-table-column
          label="t平均值"
          align="center"
          prop="taveragevalue">
        </el-table-column>
        <el-table-column
          label="dh平均值"
          align="center"
          prop="dhaveragevalue">
        </el-table-column>
        <el-table-column
          label="vr平均值"
          align="center"
          prop="vraveragevalue">
        </el-table-column>
        <el-table-column
          label="res平均值"
          width="110"
          align="center"
          prop="resaveragevalue">
        </el-table-column>
        <el-table-column
          label="tan平均值"
          width="110"
          align="center"
          prop="tanaveragevalue">
        </el-table-column>
        <el-table-column
          label="fmax平均值"
          width="110"
          align="center"
          prop="fmaxaveragevalue">
        </el-table-column>
        <el-table-column
          label="tf平均值"
          align="center"
          prop="tfaveragevalue">
        </el-table-column>
        <el-table-column
          label="smax平均值"
          width="110"
          align="center"
          prop="smaxaveragevalue">
        </el-table-column>
        <el-table-column
          label="ts平均值"
          align="center"
          prop="tsaveragevalue">
        </el-table-column>
        <el-table-column
          label="k平均值"
          align="center"
          prop="kaveragevalue">
        </el-table-column>
        <el-table-column
          label="tz平均值"
          align="center"
          prop="tzaveragevalue">
        </el-table-column>
        <el-table-column
          label="serialNumber"
          width="110"
          align="center"
          prop="serialnumber">
        </el-table-column>
        <el-table-column
          label="measureMode"
          width="120"
          align="center"
          prop="measuremode">
        </el-table-column>
        <el-table-column
          label="alertEnable"
          width="110"
          align="center"
          prop="alertenable">
        </el-table-column>
        <el-table-column
          label="alertUpper"
          width="110"
          align="center"
          prop="alertupper">
        </el-table-column>
        <el-table-column
          label="alertLower"
          width="110"
          align="center"
          prop="alertlower">
        </el-table-column>
        <el-table-column
          label="timestanp"
          width="110"
          align="center"
          prop="timestamp">
        </el-table-column>
      </el-table>
    </template>

    <!-- 分页-->
    <el-col :span="5">
      <el-pagination
        background
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-col>
    <!-- 分页end-->
  </div>
</template>

<script>
import {getGroupData, getPointData, downloadFile, getAllUserName} from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      tableList: {},
      listLoading: true,
      tableData: [],
      pageSize: 5,
      total: 30,
      currentPage: 1,
      allUserName: [],
      value: '',
      tmpValue: ''
    }
  },
  created() {
    this.fetchPointData()
  },
  methods: {
    fetchPointData() {
      getAllUserName().then(res => {
        var allUser = res.data
        for (let i = 0; i < allUser.length; i++) {
          var iterm = new Object()
          iterm.value = i
          iterm.label = allUser[i]
          this.allUserName.push(iterm)
        }
      })
      this.fetchGroupData()
      this.listLoading = true
      getPointData().then(res => {
        this.tableList = res.data
        this.listLoading = false
      })
    },
    fetchGroupData() {
      this.listLoading = true
      getGroupData().then(response => {
        this.tableData = response.data.records
        this.total = response.data.total
        this.listLoading = false
      })
    },
    download(path) {
      downloadFile(path).then(res => {
        window.open(res.data)
      })
    },

    // 分页处理
    handleSizeChange(val) {
      const formData = new FormData()
      formData.append('current', this.currentPage)
      formData.append('pageSize', val)
      formData.append('userName', this.value)
      getGroupData(formData).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
      })
      this.pageSize = val
    },

    handleCurrentChange(val) {
      const formData = new FormData()
      formData.append('current', val)
      formData.append('pageSize', this.pageSize)
      formData.append('userName', this.value)
      getGroupData(formData).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
      })
      this.currentPage = val
    },
    handleGetDataByUser() {
      const formData = new FormData()
      formData.append('current', this.currentPage)
      formData.append('pageSize', this.pageSize)
      formData.append('userName', this.value)
      getGroupData(formData).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
      })
    }
  }
}
</script>
