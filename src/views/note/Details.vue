<template>
  <div class="info">
    <h1 class="title">C++ 从入门到放弃 1</h1>
    <p>
      <img :src="me.avatar" :alt="me.nick" />
      <span>{{ me.nick }}</span>
      <a>场景</a>
      <time>2019-5-30</time>
      <span class="vie">222</span>
    </p>
  </div>
  <div class="content">
    <p>
      正文->我翻开历史一查，这历史没有年代，歪歪斜斜的每页上都写着“仁义道德”几个字。
      我横竖睡不着，仔细看了半夜，才从字缝里看出字来，满本都写着两个字是"吃人"!
    </p>
    <h1>标题1</h1>
    <p>
      我翻开历史一查，这历史没有年代，歪歪斜斜的每页上都写着“仁义道德”几个字。
      我横竖睡不着，仔细看了半夜，才从字缝里看出字来，满本都写着两个字是"吃人"!
    </p>
    <h2>标题2</h2>
    <p>
      我翻开历史一查，这历史没有年代，歪歪斜斜的每页上都写着“仁义道德”几个字。
      我横竖睡不着，仔细看了半夜，才从字缝里看出字来，满本都写着两个字是"吃人"!
    </p>
    <h3>标题3</h3>
    <p>
      我翻开历史一查，这历史没有年代，歪歪斜斜的每页上都写着“仁义道德”几个字。
      我横竖睡不着，仔细看了半夜，才从字缝里看出字来，满本都写着两个字是"吃人"!
    </p>
    <h2>下面是引用</h2>
    <blockquote>我没有说过这句话。</blockquote>

    <h2>看一下代码</h2>
    <pre>
      <code class="language-c">{{code}}</code>
    </pre>
  </div>
  <Below />
</template>

<script setup>
import Below from '../../components/Below.vue'
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const me = reactive(store.state.me)
const code = `
// Copyright 2020 Alpha Cephei Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#include "spk_model.h"

SpkModel::SpkModel(const char *speaker_path) {
    std::string speaker_path_str(speaker_path);

    ReadConfigFromFile(speaker_path_str + "/mfcc.conf", &spkvector_mfcc_opts);
    spkvector_mfcc_opts.frame_opts.allow_downsample = true; // It is safe to downsample

    ReadKaldiObject(speaker_path_str + "/final.ext.raw", &speaker_nnet);
    SetBatchnormTestMode(true, &speaker_nnet);
    SetDropoutTestMode(true, &speaker_nnet);
    CollapseModel(nnet3::CollapseModelConfig(), &speaker_nnet);

    ReadKaldiObject(speaker_path_str + "/mean.vec", &mean);
    ReadKaldiObject(speaker_path_str + "/transform.mat", &transform);

    ref_cnt_ = 1;
}

void SpkModel::Ref()
{
    std::atomic_fetch_add_explicit(&ref_cnt_, 1, std::memory_order_relaxed);
}

void SpkModel::Unref()
{
    if (std::atomic_fetch_sub_explicit(&ref_cnt_, 1, std::memory_order_release) == 1) {
         std::atomic_thread_fence(std::memory_order_acquire);
         delete this;
    }
}`
onMounted(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  Prism.highlightAll()
})
</script>

<style lang="scss" scoped>
.info {
  max-width: 800px;
  padding: 7em 20px 0 20px;
  margin: 0 auto;
  transition: all 0.5s;
  h1 {
    font-family: '微软雅黑';
    font-weight: 200;
    font-size: 3em;
  }
  p {
    margin-top: 1em;
    display: flex;
    align-items: center;
    font-size: 1.2em;
    padding-bottom: 1em;
    img {
      width: 1.5em;
      height: 1.5em;
      margin-right: 0.5em;
      border-radius: 1em;
    }
    span,
    a,
    time {
      margin-right: 1em;
    }
    time {
      color: $grey;
    }
    .vie {
      color: $grey;
    }
  }
}
.content {
  transition: all 0.5s;
  max-width: 800px;
  padding: 2.5em 0;
  margin: 0 auto;
  font: 14px BlinkMacSystemFont;
  font-family: '微软雅黑';
  p {
    line-height: 1.8;
  }
  h1 {
    // background-color: $green;
    margin: 10px 0;
    position: relative;
    font-size: 32px;
    font-weight: 200;
    border-bottom: 1px #000 dashed;
    &::before {
      content: '';
      position: absolute;
      left: -16px;
      top: 12px;
      width: 6px;
      height: calc(100% - 20px);
      border-radius: 10px;
      background: #000;
    }
  }
  h2 {
    font-size: 28px;
    font-weight: 200;
    margin: 10px 0;
    position: relative;
    border-bottom: 1px #000 dashed;
    &::before {
      content: '';
      position: absolute;
      left: -16px;
      top: 5px;
      width: 6px;
      height: calc(100% - 10px);
      border-radius: 10px;
      background: #000;
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 200;
    margin: 10px 0;
    border-bottom: 1px #000 dashed;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -16px;
      top: 5px;
      width: 6px;
      height: calc(100% - 10px);
      border-radius: 10px;
      background: #000;
    }
  }
  blockquote {
    margin: 5px 0;
    padding: 3px 3px 3px 5px;
    color: #666;
    border-left: 4px solid #ddd;
  }
}

@media screen and (max-width: $mobile-width) {
  .info {
    padding-top: 2em;
    .title {
      font-family: '微软雅黑';
      font-weight: 200;
      font-size: 2.2em;
    }
  }
  .content {
    width: 90%;
    padding-top: 1.5em;
  }
}
</style>
