<template>
  <div class="app-container">
    <el-button type="success" icon="el-icon-download" @click="download(0)">导出groupData</el-button>
    <el-button type="success" icon="el-icon-download" @click="download(1)">导出pointData</el-button>
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
                <el-table-column label="groupId" width="110" align="center">
                  <template slot-scope="scope">
                    {{ scope.row.groupid }}
                  </template>
                </el-table-column>
              </el-table>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="name"
          prop="name">
        </el-table-column>
        <el-table-column
          label="number"
          prop="number">
        </el-table-column>
        <el-table-column
          label="material"
          prop="material">
        </el-table-column>
        <el-table-column
          label="impactDevice"
          prop="impactdevice">
        </el-table-column>
        <el-table-column
          label="direction"
          prop="direction">
        </el-table-column>
        <el-table-column
          label="count"
          prop="count">
        </el-table-column>
        <el-table-column
          label="displacementCurve"
          prop="displacementCurve">
        </el-table-column>
        <el-table-column
          label="strengthcurve"
          prop="strengthCurve">
        </el-table-column>
        <el-table-column
          label="velocityCurve"
          prop="velocityCurve">
        </el-table-column>
        <el-table-column
          label="hardnessStandard"
          prop="hardnessStandard">
        </el-table-column>
        <el-table-column
          label="reboundstandard"
          prop="reboundStandard">
        </el-table-column>
        <el-table-column
          label="partnumber"
          prop="partNumber">
        </el-table-column>
        <el-table-column
          label="temperature"
          prop="temperature">
        </el-table-column>
        <el-table-column
          label="averagevalue"
          prop="averagevalue">
        </el-table-column>
        <el-table-column
          label="vmaxaveragevalue"
          prop="vmaxaveragevalue">
        </el-table-column>
        <el-table-column
          label="t1averagevalue"
          prop="t1averagevalue">
        </el-table-column>
        <el-table-column
          label="vminaveragevalue"
          prop="vminaveragevalue">
        </el-table-column>
        <el-table-column
          label="t2averagevalue"
          prop="t2averagevalue">
        </el-table-column>
        <el-table-column
          label="taveragevalue"
          prop="taveragevalue">
        </el-table-column>
        <el-table-column
          label="dhaveragevalue"
          prop="dhaveragevalue">
        </el-table-column>
        <el-table-column
          label="vraveragevalue"
          prop="vraveragevalue">
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
import { getGroupData, getPointData, downloadFile } from '@/api/table'

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
      tableList: [],
      listLoading: true,
      tableData: [{
        id: '0',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '1',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '2',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '3',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }],
      pageSize: 3,
      total: 30,
      currentPage: 1
    }
  },
  created() {
    // this.fetchGroupData()
    this.fetchPointData()
  },
  methods: {
    // fetchData() {
    //   this.listLoading = true
    //   getList().then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   })
    // },
    fetchPointData() {
      this.fetchGroupData()
      this.listLoading = true
      getPointData().then(res => {
        this.tableList = res.data
        // this.listLoading = false
        // this.tableList[this.list.groupid] = this.list
        // this.tableList[1] = this.list
        // this.tableList[2] = this.list
        console.log('tablelist', this.tableList)
        console.log('pointData', res)
      })
    },
    fetchGroupData() {
      this.listLoading = true
      getGroupData().then(response => {
        this.tableData = response.data.records
        console.log('groupData', response.data)
        this.total = response.data.total
        this.listLoading = false
      })
    },
    download(path) {
      downloadFile(path).then(res => {
        console.log('download', res)
        window.open(res.data)
      })
    },

    // 分页处理
    handleSizeChange(val) {
      console.log('执行了handleSizeChange)')
      const formData = new FormData()
      formData.append('current', this.currentPage)
      formData.append('pageSize', val)
      getGroupData(formData).then(res => {
        console.log('切换pagesize', res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
      this.pageSize = val
    },

    handleCurrentChange(val) {
      const formData = new FormData()
      formData.append('current', val)
      formData.append('pageSize', this.pageSize)
      getGroupData(formData).then(res => {
        console.log('切换current', res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
      console.log('handleCurrentChange)')
      this.currentPage = val
    }
  }
}
</script>
