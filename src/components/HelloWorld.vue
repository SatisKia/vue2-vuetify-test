<template>
  <v-card-text class="px-3 text-body-1">
    <v-card-text class="mb-3 pa-0 text-body-1">
      <v-checkbox v-bind:ripple="false" label="テスト" v-model="test" v-on:change="changeTest" hide-details />
    </v-card-text>
    <!-- テキスト -->
    <v-card-text class="mb-3 pa-0 text-body-1">
      <v-card-text class="ma-0 pa-0 text-h1" v-bind:style="{ 'background-color': backgroundColor }">Heading 1</v-card-text>
      <v-card-text class="ma-0 pa-0 text-h2" v-bind:style="{ 'background-color': backgroundColor2 }">Heading 2</v-card-text>
      <v-card-text class="ma-0 pa-0 text-h3" v-bind:style="{ 'background-color': backgroundColor }">Heading 3</v-card-text>
      <v-card-text class="ma-0 pa-0 text-h4" v-bind:style="{ 'background-color': backgroundColor2 }">Heading 4</v-card-text>
      <v-card-text class="ma-0 pa-0 text-h5" v-bind:style="{ 'background-color': backgroundColor }">Heading 5</v-card-text>
      <v-card-text class="ma-0 pa-0 text-h6" v-bind:style="{ 'background-color': backgroundColor2 }">Heading 6</v-card-text>
      <v-card-text class="ma-0 pa-0 text-subtitle-1" v-bind:style="{ 'background-color': backgroundColor }">Subtitle 1</v-card-text>
      <v-card-text class="ma-0 pa-0 text-subtitle-2" v-bind:style="{ 'background-color': backgroundColor2 }">Subtitle 2</v-card-text>
      <v-card-text class="ma-0 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">Body 1</v-card-text>
      <v-card-text class="ma-0 pa-0 text-body-2" v-bind:style="{ 'background-color': backgroundColor2 }">Body 2</v-card-text>
      <v-card-text class="ma-0 pa-0 text-button" v-bind:style="{ 'background-color': backgroundColor }">Button</v-card-text>
      <v-card-text class="ma-0 pa-0 text-caption" v-bind:style="{ 'background-color': backgroundColor2 }">Caption</v-card-text>
      <v-card-text class="ma-0 pa-0 text-overline" v-bind:style="{ 'background-color': backgroundColor }">Overline</v-card-text>
    </v-card-text>
    <!-- ボタン -->
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-btn v-bind:ripple="false" style="text-transform:none" v-on:click="onClick1">default</v-btn>
      <v-btn v-bind:ripple="false" style="text-transform:none" v-on:click="onClick2" text>text</v-btn>
      <v-btn v-bind:ripple="false" style="text-transform:none" v-on:click="onClick3" plain>plain</v-btn>
      <v-btn v-bind:ripple="false" style="text-transform:none" v-on:click="onClick4" outlined>outlined</v-btn>
    </v-card-text>
    <!-- ボタン（disabled） -->
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-btn style="text-transform:none" v-on:click="onClick1" v-bind:disabled="disableFlag1">default</v-btn>
      <v-btn style="text-transform:none" v-on:click="onClick2" v-bind:disabled="disableFlag2" text>text</v-btn>
      <v-btn style="text-transform:none" v-on:click="onClick3" v-bind:disabled="disableFlag3" plain>plain</v-btn>
      <v-btn style="text-transform:none" v-on:click="onClick4" v-bind:disabled="disableFlag4" outlined>outlined</v-btn>
    </v-card-text>
    <!-- チェックボックス -->
    <v-card-actions class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-checkbox v-bind:ripple="false" label="checkbox 1 (default)" v-model="checkboxValue1" v-on:change="changeCheckbox1" />
    </v-card-actions>
    <v-card-actions class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <!--<v-checkbox label="checkbox 2 (hide details)" v-model="checkboxValue2" v-on:change="changeCheckbox2" hide-details v-bind:disabled="true" />-->
      <v-checkbox label="checkbox 2 (hide details)" v-model="checkboxValue1" v-on:change="changeCheckbox2" hide-details v-bind:disabled="true" />
    </v-card-actions>
    <!-- ラジオボタン -->
    <v-card-actions class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-radio-group column label="radio group 1 (column & default)" v-model="radioValue1" v-on:change="selectRadio1">
        <v-radio v-bind:ripple="false" label="radio 1" value="hoge" />
        <v-radio v-bind:ripple="false" label="radio 2" value="fuga" />
        <v-radio v-bind:ripple="false" label="radio 3" value="piyo" />
      </v-radio-group>
    </v-card-actions>
    <v-card-actions class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-radio-group row label="radio group 2 (row & default)" v-model="radioValue2" v-on:change="selectRadio2">
        <v-radio v-bind:ripple="false" label="radio 1" value="hoge" />
        <v-radio v-bind:ripple="false" label="radio 2" value="fuga" />
        <v-radio v-bind:ripple="false" label="radio 3" value="piyo" />
      </v-radio-group>
    </v-card-actions>
    <v-card-actions class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-radio-group column label="radio group 3 (column & hide details)" v-model="radioValue3" v-on:change="selectRadio3" hide-details v-bind:disabled="true">
        <v-radio label="radio 1" value="hoge" />
        <v-radio label="radio 2" value="fuga" />
        <v-radio label="radio 3" value="piyo" />
      </v-radio-group>
    </v-card-actions>
    <v-card-actions class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-radio-group row label="radio group 4 (row & hide details)" v-model="radioValue4" v-on:change="selectRadio4" hide-details v-bind:disabled="true">
        <v-radio label="radio 1" v-bind:value="1" />
        <v-radio label="radio 2" v-bind:value="2" />
        <v-radio label="radio 3" v-bind:value="3" />
      </v-radio-group>
    </v-card-actions>
    <!-- テキスト入力（単一行） -->
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="default" v-model="text1" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="filled" v-model="text2" filled />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="outlined" v-model="text3" outlined />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="solo" v-model="text4" solo />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="default (hide details)" hide-details v-bind:disabled="true" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="filled (hide details)" filled hide-details v-bind:disabled="true" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="outlined (hide details)" outlined hide-details v-bind:disabled="true" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-text-field label="solo (hide details)" solo hide-details v-bind:disabled="true" />
    </v-card-text>
    <!-- テキスト入力（複数行） -->
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="default" v-model="text5" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="filled" v-model="text6" filled />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="outlined" v-model="text7" outlined />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="solo" v-model="text8" solo />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="default (hide details)" hide-details v-bind:disabled="true" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="filled (hide details)" filled hide-details v-bind:disabled="true" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="outlined (hide details)" outlined hide-details v-bind:disabled="true" />
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-textarea label="solo (hide details)" solo hide-details v-bind:disabled="true" />
    </v-card-text>
    <!-- テーブル -->
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <table style="width:100%">
        <tbody>
          <tr>
            <td style="width:33.3%; height:48px; text-align:left" v-bind:style="{ 'background-color': backgroundColor }">text-align left</td>
            <td style="width:33.3%; height:48px; text-align:center" v-bind:style="{ 'background-color': backgroundColor2 }">text-align center</td>
            <td style="width:33.3%; height:48px; text-align:right" v-bind:style="{ 'background-color': backgroundColor }">text-align right</td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
    <v-card-text class="mb-3 pa-0 text-body-1" v-bind:style="{ 'background-color': backgroundColor }">
      <v-simple-table style="width:100%">
        <tbody>
          <tr>
            <td class="px-0 text-body-1 text-left" style="width:33.3%; height:48px" v-bind:style="{ 'background-color': backgroundColor2 }">text-left</td>
            <td class="px-0 text-body-1 text-center" style="width:33.3%; height:48px" v-bind:style="{ 'background-color': backgroundColor }">text-center</td>
            <td class="px-0 text-body-1 text-right" style="width:33.3%; height:48px" v-bind:style="{ 'background-color': backgroundColor2 }">text-right</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  data () {
    return {
      test: false,
      backgroundColor: '#ffffff',
      backgroundColor2: '#ffffff',
      disableFlag1: true,
      disableFlag2: true,
      disableFlag3: true,
      disableFlag4: true,
      checkboxValue1: false,
      checkboxValue2: false,
      radioValue1: 'hoge',
      radioValue2: 'hoge',
      radioValue3: 'hoge',
      radioValue4: 1,
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: ''
    }
  },
  methods: {
    changeTest: function () {
      if (this.test) {
        this.backgroundColor = '#ffffc0'
        this.backgroundColor2 = '#ffc0ff'
      } else {
        this.backgroundColor = '#ffffff'
        this.backgroundColor2 = '#ffffff'
      }
    },
    onClick1: function () {
      console.log('onClick1')
    },
    onClick2: function () {
      console.log('onClick2')
    },
    onClick3: function () {
      console.log('onClick3')
    },
    onClick4: function () {
      console.log('onClick4')
    },
    changeCheckbox1: function () {
      console.log('changeCheckbox1 ' + this.checkboxValue1)
    },
    changeCheckbox2: function () {
      console.log('changeCheckbox2 ' + this.checkboxValue2)
    },
    selectRadio1: function () {
      console.log('selectRadio1 ' + this.radioValue1)
    },
    selectRadio2: function () {
      console.log('selectRadio2 ' + this.radioValue2)
    },
    selectRadio3: function () {
      console.log('selectRadio3 ' + this.radioValue3)
    },
    selectRadio4: function () {
      console.log('selectRadio4 ' + this.radioValue4)
    }
  },
  watch: {
    text1 (newVal) {
      console.log('text1 ' + newVal)
    },
    text2 (newVal) {
      console.log('text2 ' + newVal)
    },
    text3 (newVal) {
      console.log('text3 ' + newVal)
    },
    text4 (newVal) {
      console.log('text4 ' + newVal)
    },
    text5 (newVal) {
      console.log('text5 ' + newVal)
    },
    text6 (newVal) {
      console.log('text6 ' + newVal)
    },
    text7 (newVal) {
      console.log('text7 ' + newVal)
    },
    text8 (newVal) {
      console.log('text8 ' + newVal)
    }
  }
})
</script>
