<template>
  <div :class="openH5Icon ? 'menu h5-menu' : 'menu'">
    <div class="logo">
      <img src="../assets/image/img-logo@2x.png" alt="" />
      <div class="alpha"></div>
    </div>
    <div class="menu-list">
      <nuxt-link
        to="/swap"
        :class="$route.name === 'swap' || $route.path === '/' ? 'nuxt-link-exact-active nuxt-link-active menu-item-active' : ''"
      >
        <span>{{ $t('menu.swap') }}</span>
      </nuxt-link>
      <nuxt-link
        to="/pools"
        :class="
          $route.name === 'pools' ||
          $route.name === 'pools' ||
          $route.name === 'position-list' ||
          $route.name === 'remove-liquidity' ||
          $route.name === 'increase-liquidity' ||
          $route.name === 'pools-position' ||
          $route.name === 'pools-liquidity-add' ||
          $route.name === 'pools-management-remove' ||
          $route.path.includes('position-detail')
            ? 'nuxt-link-exact-active nuxt-link-active menu-item-active'
            : ''
        "
      >
        <span>{{ $t('menu.pools') }}</span>
      </nuxt-link>
      <a href="https://bridge.cetus.zone/">
        <span>{{ $t('menu.bridge') }}</span>
      </a>

      <nuxt-link
        v-if="store.theme == 'default'"
        to="/stats"
        :class="$route.name === 'stats' ? 'nuxt-link-exact-active nuxt-link-active menu-item-active' : ''"
      >
        <span>{{ $t('menu.stats') }}</span>
      </nuxt-link>
    </div>
    <!-- <div class="swaichChain" @click.stop="openSwitchChain = !openSwitchChain">
      <div :class="openSwitchChain ? 'text rodegText' : 'text'">
        <img :src="importIcon(`/image/${store.chainName.toLowerCase()}.png`)" alt="" />
        <span>{{ store.chainName }}</span>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-icon_on" />
        </svg>
      </div>
      <div v-if="openSwitchChain" class="list">
        <p>Switch Chain</p>
        <div
          v-for="item in chainList"
          :key="item.name"
          :class="item.name == store.chainName ? 'item-container item-active-container' : 'item-container'"
        >
          <div class="item" @click="changeChain(item.name)">
            <img v-if="store.theme == 'default' && item.name == store.chainName" src="../assets/image/icon-check@2x.png" alt="" />
            <img v-if="store.theme == 'sui' && item.name == store.chainName" src="../assets/sui-image/checked.png" alt="" />
            <img :src="importIcon(`/image/${item.name.toLowerCase()}.png`)" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="more">
      <div class="list">
        <div v-for="item in list" :key="item.name" class="item-container">
          <a class="item" :href="item.link" target="_blank">
            <svg aria-hidden="true" class="icon">
              <use :xlink:href="item.icon" />
            </svg>
            <span>{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div> -->
    <div class="h5-more">
      <div class="lang-tab">
        <div class="lang-title">Language</div>
        <div class="switch-lang" @click.stop="openSwitchLang = !openSwitchLang">
          <div class="current-lang">
            <span>
              {{ langObj[counter.lang] }}
            </span>
            <svg :class="openSwitchLang ? 'icon-open' : 'icon-close'" class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_on" />
            </svg>
          </div>
          <div v-if="openSwitchLang" class="list">
            <div
              v-for="item in langList"
              :key="item.value"
              :class="item.value == counter.lang ? 'item-container item-active-container' : 'item-container'"
            >
              <div class="item" @click="changeLang(item.value)">
                <span>{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-us">
        <div class="contact-us-item">
          <a class="item" href="https://cetus-1.gitbook.io/cetus-docs/" target="_blank">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-icon-Docs" />
            </svg>
            <span>{{ $t('contactUS.docs') }}</span>
          </a>
        </div>
        <div class="contact-us-list">
          <div class="contact-us-item">
            <a class="item" href="https://twitter.com/CetusProtocol" target="_blank">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-icon-twitter" />
              </svg>
              <span>{{ $t('contactUS.twitter') }}</span>
            </a>
          </div>

          <div class="contact-us-item">
            <a class="item" href="https://twitter.com/CetusProtocol" target="_blank">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-icon-twitter" />
              </svg>
              <span>{{ $t('contactUS.twitter') }}</span>
            </a>
          </div>

          <div class="contact-us-item">
            <a class="item" href="https://discord.gg/rQtYGfmcD8" target="_blank">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-icon-Discord" />
              </svg>
              <span>{{ $t('contactUS.discord') }}</span>
            </a>
          </div>

          <div class="contact-us-item">
            <a class="item" href="https://t.me/cetuscommunity" target="_blank">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-icon-telegram" />
              </svg>
              <span>{{ $t('contactUS.tgGroup') }}</span>
            </a>
          </div>

          <div class="contact-us-item">
            <a class="item" href="https://t.me/cetusprotocol" target="_blank">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-icon-TgChannel" />
              </svg>
              <span>{{ $t('contactUS.tgChannel') }}</span>
            </a>
          </div>

          <div class="contact-us-item">
            <a class="item" href="https://t.me/cetusprotocol" target="_blank">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-icon-TgChannel" />
              </svg>
              <span>{{ $t('contactUS.tgChannel') }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import useTheme from '@/composables/useTheme'
import { useIndexStore } from '@/store'
import { defineComponent, computed, ref, onMounted, onUnmounted } from 'vue'
import importIcon from '@/utils/import-icon'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  props: {
    openH5Icon: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { t } = useI18n()
    let list = [
      {
        name: t('contactUS.docs'),
        icon: '#icon-icon-Docs',
        link: 'https://cetus-1.gitbook.io/cetus-docs/'
      },
      {
        name: t('contactUS.twitter'),
        icon: '#icon-icon-twitter',
        link: 'https://twitter.com/CetusProtocol'
      },
      {
        name: t('contactUS.discord'),
        icon: '#icon-icon-Discord',
        link: 'https://discord.gg/rQtYGfmcD8'
      },
      {
        name: t('contactUS.tgGroup'),
        icon: '#icon-icon-telegram',
        link: 'https://t.me/cetuscommunity'
      },
      {
        name: t('contactUS.tgChannel'),
        icon: '#icon-icon-TgChannel',
        link: 'https://t.me/cetusprotocol'
      },
      {
        name: t('contactUS.medium'),
        icon: '#icon-icon-medium',
        link: 'https://medium.com/@CetusProtocol'
      }
    ]
    const chainList = [
      {
        name: 'Sui'
      },
      {
        name: 'Aptos'
      }
    ]
    let openSwitchChain = ref(false)
    const counter = useIndexStore()
    const store = computed(() => {
      return counter
    })
    let currentChain = ref(store.value.chainName || 'Aptos')
    onMounted(() => {
      // themeStore.seleteDefaultTheme()
      document.addEventListener('click', () => {
        openSwitchChain.value = false
      })
    })
    onUnmounted(() => {
      document.removeEventListener('click', () => {
        openSwitchChain.value = false
      })
    })
    const themeStore = useTheme()
    const changeChain = name => {
      currentChain.value = name
      if (name == 'Aptos') {
        themeStore.seleteDefaultTheme()
      }
      if (name == 'Sui') {
        themeStore.selectSuiTheme()
      }
    }

    const langObj = {
      en: 'English',
      th: 'ไทย',
      // kr: '한국어',
      vi: 'Tiếng Việt',
      ru: 'Русский'
    }
    const langList = [
      {
        label: 'English',
        value: 'en'
      },
      {
        label: 'ไทย',
        value: 'th'
      },
      // {
      //   label: '한국어',
      //   value: 'kr'
      // },
      {
        label: 'Tiếng Việt',
        value: 'vi'
      },
      {
        label: 'Русский',
        value: 'ru'
      }
    ]
    const { locale } = useI18n()
    const openSwitchLang = ref(false)
    const { setLang } = counter
    const changeLang = value => {
      setLang(value)
      locale.value = value
      list = [
        {
          name: t('contactUS.docs'),
          icon: '#icon-icon-Docs',
          link: 'https://cetus-1.gitbook.io/cetus-docs/'
        },
        {
          name: t('contactUS.twitter'),
          icon: '#icon-icon-twitter',
          link: 'https://twitter.com/CetusProtocol'
        },
        {
          name: t('contactUS.discord'),
          icon: '#icon-icon-Discord',
          link: 'https://discord.gg/cetusprotocol'
        },
        {
          name: t('contactUS.tgGroup'),
          icon: '#icon-icon-telegram',
          link: 'https://t.me/cetuscommunity'
        },
        {
          name: t('contactUS.tgChannel'),
          icon: '#icon-icon-TgChannel',
          link: 'https://t.me/cetusprotocol'
        },
        {
          name: t('contactUS.medium'),
          icon: '#icon-icon-medium',
          link: 'https://medium.com/@CetusProtocol'
        }
      ]
    }
    return {
      changeChain,
      currentChain,
      chainList,
      openSwitchChain,
      importIcon,
      store,
      list,
      themeStore,
      counter,
      langObj,
      changeLang,
      openSwitchLang,
      langList
    }
  }
})
</script>
<style lang="less" scoped>
@import '../assets/css/base.less';
.theme-sui {
  .menu-item-active {
    background: url('/sui-image/img-sel@2x.png') !important;
    background-size: 100% 100% !important;
  }
}
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  .logo {
    display: none;
  }
  a {
    display: block;
    color: @textDefault;
    padding: 10px 23px;
    &:hover {
      color: @textActive;
    }
  }
  .menu-item-active {
    background: url('/image/img-sel@2x.png');
    background-size: 100% 100%;
    color: @textActive;
  }
  .swaichChain {
    display: none;
  }
  .menu-list {
    display: flex;
  }
  .more {
    display: none;
  }
  .h5-more {
    display: none;
  }
}
@media (max-width: 1100px) {
  .menu-list {
    margin-left: -150px;
  }
}
@media (max-width: 1000px) {
  .menu-list {
    margin-left: -180px;
  }
}
@media (max-width: 900px) {
  .menu-list {
    margin-left: -338px;
  }
}
@media (max-width: 750px) {
  .menu {
    .menu-list {
      margin-left: 0 !important;
      display: none;
    }
  }
  .h5-menu {
    width: 75%;
    height: 100%;
    background: rgba(#000, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 40px;
    z-index: 999;
    .logo {
      display: block;
      position: relative;
      margin: 28px 0 62px 18px;
      img {
        width: 132px;
        height: 32px;
      }

      .alpha {
        position: absolute;
        top: 50%;
        left: 144px;
        transform: translateY(-50%);
        width: 66px;
        height: 24px;
        background: url('/image/label-Alpha@2x.png');
        background-size: 100% 100%;
      }
    }
    .swaichChain {
      display: block;
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      .text {
        display: flex;
        align-items: center;
        &:hover {
          span {
            color: @themeColor;
          }
        }
        img {
          width: 24px;
          height: 24px;
        }
        span {
          margin: 0 5px;
          font-size: 12px;
          color: @textActive;
        }
        svg {
          width: 12px;
          height: 12px;
          fill: @textDefault;
        }
      }
      .rodegText {
        svg {
          rotate: 180deg;
        }
      }
      .list {
        width: 100%;
        position: absolute;
        top: 36px;
        left: 0px;
        background: #181818;
        padding: 12px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          padding: 0 20px;
          font-size: 12px;
          color: @textActive;
        }
        .item-container {
          padding: 0 20px;
          height: 40px;
          line-height: 40px;
          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 24px;
              height: 24px;
            }
            span {
              margin-left: 5px;
              color: @textActive;
            }
          }
        }
        .item-active-container {
          width: 100%;
          background: @buttonDetailDefault;
          padding: 0 3px !important;
          border: 1px solid @borderDefault;
          .item {
            img {
              &:nth-child(1) {
                width: 20px;
                height: 20px;
                margin-right: 3px;
              }
            }
            span {
              color: @themeColor;
            }
          }
        }
      }
    }
    .h5-more {
      width: 100%;
      padding: 0 15px;
      display: block;
      .lang-tab {
        padding: 15px 0;
        border-top: 1px solid @borderDefault;
        border-bottom: 1px solid @borderDefault;
        .lang-title {
          color: @textActive;
          margin-bottom: 10px;
        }
      }
      .switch-lang {
        display: block;
        width: 120px;
        height: 36px;
        padding: 6px 12px;
        background: @buttonDetailDefault;
        border: 1px solid @borderDefault;
        font-size: 14px;
        margin-right: 12px;
        position: relative;
        .current-lang {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: @textActive;

          .icon {
            width: 12px;
            height: 12px;
            fill: @textActive;
            margin-left: 3px;
            transition: all 0.5s;
          }
          .icon-open {
            transform: rotate(180deg);
          }
        }
        .list {
          width: 120px;
          // height: 200px;
          // overflow: scroll;
          position: absolute;
          top: 36px;
          left: 0;
          // padding: 12px 0;
          p {
            padding: 0 20px;
            font-size: 12px;
            color: @textActive;
          }
          .item-container {
            // padding: 0 20px;
            height: 40px;
            line-height: 40px;
            padding: 0 3px !important;

            background: #181818;
            .item {
              display: flex;
              align-items: center;
              img {
                width: 24px;
                height: 24px;
              }
              span {
                font-size: 12px;
                margin-left: 5px;
                color: @textActive;
              }
            }
          }
          .item-active-container {
            width: 100%;
            background: @buttonDetailDefault;
            padding: 0 3px !important;
            border: 1px solid @borderDefault;
            .item {
              img {
                &:nth-child(1) {
                  width: 20px;
                  height: 20px;
                  margin-right: 3px;
                }
              }
              span {
                color: @themeColor;
              }
            }
          }
        }
      }
      .contact-us {
        padding-top: 20px;
        .contact-us-item {
          .item {
            padding: 5px;
            display: flex;
            align-items: center;
            span {
              font-size: 12px;
            }
            .icon {
              margin-right: 5px;
              width: 24px;
              height: 24px;
              fill: @textActive;
            }
          }
        }
        .contact-us-list {
          display: flex;
          flex-wrap: wrap;
          .contact-us-item .item {
            padding: 5px;
          }
        }
      }
    }

    .menu-list {
      margin-top: -60px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        margin-bottom: 10px;
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
      span {
        font-size: 16px;
        font-weight: 600;
      }
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 20px;
      .list {
        .item-container {
          margin-bottom: 12px;
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
          .item {
            display: flex;
            align-items: center;
            &:hover {
              svg {
                fill: @themeColor;
              }
              span {
                color: @themeColor;
              }
            }
            svg {
              width: 20px;
              height: 20px;
              fill: @textActive;
              margin-right: 12px;
            }
            span {
              font-size: 12px;
              color: @textActive;
            }
          }
        }
      }
    }
  }
}
</style>
