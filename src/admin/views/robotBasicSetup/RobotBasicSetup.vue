<template>
  <el-row>
    <el-row class="wrapper">
      <el-row class="title">机器人基本信息</el-row>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="wrapper">
      <el-row class="title">机器人服务配置</el-row>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="机器人开关">
          <el-radio-group v-model="form.resource">
            <el-radio label="on">开启</el-radio>
            <el-radio label="off">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="机器人欢迎语">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="推荐常见问题"><!--点击开启显示详细信息-->
          <el-radio-group v-model="form.resource">
            <el-radio label="on">开启</el-radio>
            <el-radio label="off">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="日常聊天库">
          <el-radio-group v-model="form.resource">
            <el-radio label="on">开启</el-radio>
            <el-radio label="off">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="可能问法">
          <el-radio-group v-model="form.resource">
            <el-radio label="on">开启</el-radio>
            <el-radio label="off">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="回答结果采集">
          <el-radio-group v-model="form.resource">
            <el-radio label="on">开启</el-radio>
            <el-radio label="off">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手动转人工">
          <el-radio-group v-model="form.resource">
            <el-radio label="on">开启</el-radio>
            <el-radio label="off">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="关键词转人工">
          <el-radio-group v-model="form.resource">
            <el-radio label="on">开启</el-radio>
            <el-radio label="off">关闭</el-radio>
          </el-radio-group>
          <el-row>
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </el-row>
        </el-form-item>
        <el-form-item label="回答失败转人工">
          在
          <el-select v-model="form.region" placeholder="">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
          次回答失败后自动转人工
        </el-form-item>

        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },

      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
