<template>
  <div class="player">
    <div class="progress"></div>
    <div class="panel">
      <div class="playing">
        <div class="container">
          <img class="cover" src="https://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg?param=224y224" />
          <div class="track-info">
            <div class="name">烟火里的尘埃</div>
            <div class="artist">华晨宇</div>
          </div>
        </div>
      </div>
      <div class="controls">
        <button class="btn">
          <img src="../assets/images/last.png" />
        </button>
        <button class="btn pause">
          <!-- <img class="pause-img" src="../assets/images/play.png" /> -->
          <img class="pause-img" src="../assets/images/pause.png" />
        </button>
        <button class="btn">
          <img src="../assets/images/next.png" />
        </button>
      </div>
      <div class="volumes"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.player {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 64px;
  backdrop-filter: saturate(180%) blur(30px);
  background-color: hsla(0, 0%, 100%, 0.86);
  // background-color: $orange;
  z-index: $loder-player-z-index;
  .progress {
    margin-top: -4px;
    margin-bottom: -6px;
    width: 100%;
    background-color: $orange;
    height: 2px;
  }

  .panel {
    padding: 0 5vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    .playing {
      display: flex;
      align-items: center;
      // justify-content: center;
      .container {
        display: flex;
        .cover {
          height: 46px;
          border-radius: 5px;
          box-shadow: 0 6px 8px -2px rgb(0 0 0 / 16%);
          cursor: pointer;
          user-select: none;
        }
        .track-info {
          height: 46px;
          margin-left: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .name {
            font-weight: 600;
            font-size: 16px;
            opacity: 0.88;
            color: #000;
            margin-bottom: 4px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            word-break: break-all;
          }
          .artist {
            font-size: 12px;
            opacity: 0.58;
            color: #000;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            word-break: break-all;
            // span.ar {
            //   cursor: pointer;
            //   &:hover {
            //     text-decoration: underline;
            //   }
            // }
          }
        }
      }
    }
    .controls {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
      .btn {
        margin: 0 8px;
        // padding: 0;
        width: 40px;
        height: 32px;
        background-color: transparent;
        border-radius: 0.5em;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover {
          background-color: #f5f5f7;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pause {
        width: 56px;
        height: 45px;
      }
    }
  }
}

@media (max-width: 1336px) {
  .controls {
    padding: 0 5vw;
  }
}
</style>
