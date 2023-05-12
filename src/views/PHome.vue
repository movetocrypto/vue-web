<script lang="ts" setup>
import { loadScript } from "@/utils/func";
import { onMounted } from "vue";

onMounted(() => {
  loadScript("/assets/app.js", () => {});
});
</script>
<script>
</script>
<template>
  <div>
    <nav class="navbar">
      <!-- <a class="navbar-logo" href="/"
        style="--logo-url: url(&#39;logo-df.svg&#39;)"><span class="navbar-logo-text">BRC-20 &nbsp;DAO</span></a> -->
      <div class="tit_box">
        <img src="../assets/two.jpg" alt="" />
        <div class="font">BRC-20 DAO</div>
      </div>
      <div class="navbar-group">
        <ul class="navbar-group-set navbar-main">
          <!-- <li class="navbar-main-tab"><a href="/staking">Dashboard (coming soon)</a></li> -->
        </ul>
        <!-- <div class="navbar-group-set navbar-locale select"><button class="select-button"><span>English</span></button>
          <div class="select-options">
            <ul class="select-optionlist">
              <li class="select-optionlist-item" data-value="en" tabindex="0">English</li>
              <li class="select-optionlist-item" data-value="ko" tabindex="0">한국어</li>
              <li class="select-optionlist-item" data-value="vi" tabindex="0">Tiếng Việt</li>
            </ul>
          </div>
        </div> -->
      </div>
      <button class="navbar-menu"><i class="navbar-menu-icon"></i></button>
    </nav>
    <main role="main">
      <header class="index-header">
        <div class="index-header-illust">
          <img
            class="index-header-orbit"
            src="/data/index/header-illust-orbit--1.4.0.png"
            alt="A part of the header illustration"
          />
          <figure class="index-header-plate--orange">
            <b></b><b></b><b></b><b></b><b></b><i></i><i></i><i></i><i></i
            ><i></i>
          </figure>
          <figure class="index-header-plate--yellow">
            <b></b><b></b><b></b><b></b><b></b><i></i><i></i><i></i><i></i
            ><i></i>
          </figure>
          <figure class="index-header-plate--white">
            <b></b><b></b><b></b><b></b><b></b><i></i><i></i><i></i><i></i
            ><i></i>
          </figure>
        </div>
        <div class="index-header-main">
          <div class="index-header-hero">
            <figure class="index-header-logo">
              <!-- <svg width="72" height="72" viewBox="0 0 72 72" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="logo-dorayaki-shape">
                  <path
                    d="M42.5809 20.9662C42.5809 24.3067 39.6345 27.0148 36 27.0148C32.3655 27.0148 29.4192 24.3067 29.4192 20.9662C29.4192 17.6256 32.3655 14.9176 36 14.9176C39.6345 14.9176 42.5809 17.6256 42.5809 20.9662Z"
                    fill="white"></path>
                  <path
                    d="M48.0649 43.0432C48.0649 47.7198 42.6633 47.8824 36 47.8824C29.3368 47.8824 23.9351 47.7198 23.9351 43.0432C23.9351 38.3665 26.9513 30.6439 36 30.6439C45.0487 30.6439 48.0649 38.3665 48.0649 43.0432Z"
                    fill="white"></path>
                  <path
                    d="M18.4511 35.7852C22.0856 35.7852 25.0319 33.0771 25.0319 29.7366C25.0319 26.3961 22.0856 23.688 18.4511 23.688C14.8166 23.688 11.8702 26.3961 11.8702 29.7366C11.8702 33.0771 14.8166 35.7852 18.4511 35.7852Z"
                    fill="white"></path>
                  <path
                    d="M60.1298 29.7366C60.1298 33.0771 57.1834 35.7852 53.5489 35.7852C49.9144 35.7852 46.9681 33.0771 46.9681 29.7366C46.9681 26.3961 49.9144 23.688 53.5489 23.688C57.1834 23.688 60.1298 26.3961 60.1298 29.7366Z"
                    fill="white"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M36 67.5529C55.4404 67.5529 71.2 53.4157 71.2 35.9765C71.2 26.1399 66.1861 17.3539 58.3258 11.5628C52.3721 7.10439 44.5575 4.39999 36 4.39999C27.4424 4.39999 19.6278 7.10442 13.6741 11.5628C5.81389 17.3539 0.800003 26.1399 0.800003 35.9765C0.800003 53.4157 16.5596 67.5529 36 67.5529ZM36 60.5647C54.153 60.5647 68.4979 48.0925 68.4979 33.1294C68.4979 18.1663 54.153 5.69411 36 5.69411C17.847 5.69411 3.50212 18.1663 3.50212 33.1294C3.50212 48.0925 17.847 60.5647 36 60.5647Z"
                    fill="white"></path>
                </g>
              </svg>   -->
              <!-- <img src="../assets/two.jpg" style="height: 50px;width: 50px;" alt=""> -->
            </figure>
            <h1 class="index-header-title">Welcome to BRC-20&nbsp;DAO</h1>
            <p class="index-header-slogan">
              Harness the power of community to enhance the brc-20 ecosystem.
            </p>
          </div>
        </div>
      </header>
      <section class="index-highlight highlight" id="highlight">
        <ul
          class="highlight-list"
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <li class="highlight-item" id="get-dora">
            <figure
              class="highlight-icon"
              style="background-image: url(./data/index/highlight-1-icon.png)"
            ></figure>
            <div class="highlight-text">
              <h2 class="highlight-name">Get Majo</h2>
              <p class="highlight-desc">
                Majo is the currency of Brc-20 DAO,you can use it across BRC-20
                DAO and BRC-20 infrastructures.
              </p>
              <a href="https://unisat.io/market?tick=Majo&tab=1">
                <button class="highlight-button button-text-secondary-md">
                  Get Majo
                </button>
              </a>
            </div>
            <div class="highlight-details">
              <article class="highlight-details-wrap">
                <header
                  class="highlight-details-header"
                  @click="console.log('1111')"
                >
                  <a
                    class="highlight-details-link button-text-secondary-md"
                    target="_blank"
                    rel="noopener external nofollow noreferrer"
                    href="https://unisat.io/market?tick=Majo&tab=1"
                  >
                    <figure
                      class="highlight-details-icon"
                      style="
                        background-image: url(./data/index/highlight-1-icon.png);
                      "
                    ></figure>
                    Get Majo</a
                  >
                </header>
                <div class="highlight-details-body">
                  <h3>How to get Majo</h3>
                  <div>
                    <p>
                      How to get Majo ou can buy Majo token from
                      <a
                        target="_blank"
                        rel="noopener external nofollow noreferrer"
                        href="https://unisat.io/market?tick=Majo&tab=1"
                        >unisat(https://unisat.io/market?tick=Majo&tab=1).</a
                      >
                      you can view active Majo markets from Our dashboard.
                    </p>
                    <p>
                      After you get Majo, you can store it in your own wallet.
                      It is highly recommended to use a non-custodial wallet
                      that has been proven to be secure to store your Majo.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </li>
          <!-- <li class="highlight-item" id="get-vcdora">
            <figure class="highlight-icon"
              style="background-image:url(./data/index/highlight-2-icon.png)"></figure>
            <div class="highlight-text">
              <h2 class="highlight-name">Get vcDORA</h2>
              <p class="highlight-desc">vcDORA is the governance voice credit for open-community grant DAOs.</p><button
                class="highlight-button button-text-secondary-md">Get vcDORA</button>
            </div>
            <div class="highlight-details">
              <article class="highlight-details-wrap">
                <header class="highlight-details-header">
                  <figure class="highlight-details-icon"
                    style="background-image:url(./data/index/highlight-2-icon.png)"></figure><a
                    class="highlight-details-link button-text-secondary-md" target="_blank"
                    rel="noopener external nofollow noreferrer" href="https://dao.dorahacks.io/#/">Get vcDORA</a>
                </header>
                <div class="highlight-details-body">
                  <h3>How to get vcDORA</h3>
                  <div>
                    <p><a target="_blank" rel="noopener external nofollow noreferrer"
                        href="https://doraresear.ch/2022/09/16/vcdora">vcDORA</a> is the voice credit for DORA community
                      governance. It is currently the voting credit of Dora Grant DAO. You can get vcDORA by <a
                        target="_blank" rel="noopener external nofollow noreferrer"
                        href="https://dao.dorahacks.io/">staking</a> DORA token.</p>
                  </div>
                </div>
              </article>
            </div>
          </li> -->
          <li class="highlight-item" id="dora-grant-dao">
            <figure
              class="highlight-icon"
              style="background-image: url(./data/index/highlight-3-icon.png)"
            ></figure>
            <div class="highlight-text">
              <h2 class="highlight-name">BRC-20 DAO</h2>
              <p class="highlight-desc">
                An open venture grant community supporting the Ordinals
                ecosystem.
              </p>
              <a href="https://medium.com/@brcdao/brc-20-dao-92f1fa483f1f">
                <button class="highlight-button button-text-secondary-md">
                  View details
                </button>
              </a>
            </div>
            <div class="highlight-details">
              <article class="highlight-details-wrap">
                <header class="highlight-details-header">
                  <figure
                    class="highlight-details-icon"
                    style="
                      background-image: url(./data/index/highlight-3-icon.png);
                    "
                  ></figure>
                  <a
                    class="highlight-details-link button-text-secondary-md"
                    target="_blank"
                    rel="noopener external nofollow noreferrer"
                    href="https://medium.com/@brcdao/brc-20-dao-92f1fa483f1f"
                    >View details</a
                  >
                </header>
                <div class="highlight-details-body">
                  <h3>About BRC-20 DAO</h3>
                  <div>
                    <p>
                      Currently, most BRC-20 projects on the BTC network have
                      limited room for speculation due to their extremely low
                      issuance costs. After several months of technical
                      development, OpenDAO released its sub-DAO on the BTC
                      chain, BRC-20 DAO, on April 30, 2023. BRC-20 DAO has now
                      successfully launched its own platform currency $Majo, and
                      will be concentrating on building the infrastructure for
                      the Ordinal ecosystem.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </li>
        </ul>
      </section>
      <section class="index-stories">
        <article class="index-story index-story--1" id="what-is-dora-factory">
          <figure
            class="index-story-illust index-story-illust--1 is-loading is-preload"
          >
            <b></b><b></b><b></b><b></b><b></b
            ><img src="/data/index/story-1-core.png" alt="About BRC-20 DAO" /><i
              style="background-image: url(./data/index/story-1-icon-1.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-1-icon-2.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-1-icon-3.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-1-icon-4.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-1-icon-5.png)"
            ></i>
          </figure>
          <div class="index-story-text is-loading is-preload">
            <h2 class="index-story-heading">About BRC-20 DAO</h2>
            <p class="index-story-lead">
              <em
                >Currently, most BRC-20 projects on the BTC network have limited
                room for speculation due to their extremely low issuance costs.
                After several months of technical development, OpenDAO released
                its sub-DAO on the BTC chain, BRC-20 DAO, on April 30, 2023.</em
              >
            </p>
            <p class="index-story-body">
              BRC-20 DAO has now successfully launched its own platform currency
              $Majo, and will be concentrating on building the infrastructure
              for the Ordinal ecosystem.
            </p>
          </div>
        </article>
        <article
          class="index-story index-story--2"
          id="unleash-the-creativity-of-the-mass"
        >
          <figure
            class="index-story-illust index-story-illust--2 is-loading is-preload"
          >
            <b></b><b></b><b></b><b></b><b></b
            ><img
              src="/data/index/story-2-core.png"
              alt="Ordinals Dashboard"
            /><i
              style="background-image: url(./data/index/story-2-icon-1.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-2-icon-2.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-2-icon-3.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-2-icon-4.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-2-icon-5.png)"
            ></i>
          </figure>
          <div class="index-story-text is-loading is-preload">
            <h2 class="index-story-heading">Ordinals Dashboard</h2>
            <p class="index-story-lead">
              <em
                >Users can view BRC-20 market trends through our dashboard,
                which features the same interface used by the BTC network.
                Additionally, when they connect their wallets to our platform
                and view brc-20 market data, they can accumulate their own point
                values and increase their eligibility for airdrops.
              </em>
            </p>
          </div>
        </article>
        <article
          class="index-story index-story--3"
          id="empower-open-source-communities"
        >
          <figure
            class="index-story-illust index-story-illust--3 is-loading is-preload"
          >
            <b></b><b></b><b></b><b></b><b></b
            ><img
              src="/data/index/story-3-core.png"
              alt="Ordinals Launchpad"
            /><i
              style="background-image: url(./data/index/story-3-icon-1.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-3-icon-2.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-3-icon-3.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-3-icon-4.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-3-icon-5.png)"
            ></i>
          </figure>
          <div class="index-story-text is-loading is-preload">
            <h2 class="index-story-heading">Ordinals Launchpad</h2>
            <p class="index-story-lead">
              <em
                >Our launchpad utilizes $Majo fundraising to launch new brc-20
                projects, with the collected $Majo being locked for exchange
                with project tokens. Holders of $Majo and our launchpad's pass
                card enjoy higher priority and we have collaborated with several
                exceptional projects.
              </em>
            </p>
          </div>
        </article>
        <article
          class="index-story index-story--4"
          id="fund-the-everlasting-hacker-movement"
        >
          <figure
            class="index-story-illust index-story-illust--4 is-loading is-preload"
          >
            <b></b><b></b><b></b><b></b><b></b
            ><img src="/data/index/story-4-core.png" alt="BTC L2" /><i
              style="background-image: url(./data/index/story-4-icon-1.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-4-icon-2.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-4-icon-3.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-4-icon-4.png)"
            ></i
            ><i
              style="background-image: url(./data/index/story-4-icon-5.png)"
            ></i>
          </figure>
          <div class="index-story-text is-loading is-preload">
            <h2 class="index-story-heading">BTC L2</h2>
            <p class="index-story-lead">
              <em
                >BRC-20 DAO aims to create a layer for Bitcoin within smart
                contracts, enabling both smart contracts and decentralized
                applications to securely use Bitcoin as an asset and settle
                transactions on the Bitcoin blockchain without the need for
                trust.
              </em>
            </p>
          </div>
        </article>
      </section>
      <div class="highlight-modal layout-modal">
        <div class="layout-modal-wrap" tabindex="0">
          <button class="layout-modal-close"></button>
          <div class="layout-modal-main"></div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <nav class="footer-sns">
        <a
          class="footer-sns-item footer-sns-item--twitter"
          href="https://twitter.com/BRC20_DAO"
          target="_blank"
          rel="noopener external nofollow noreferrer"
          ><span class="footer-sns-item-label">BRC-20 DAO on Twitter</span></a
        ><a
          class="footer-sns-item footer-sns-item--discord"
          href="https://discord.gg/brc20dao"
          target="_blank"
          rel="noopener external nofollow noreferrer"
          ><span class="footer-sns-item-label">BRC-20 DAO on Discord</span></a
        >
      </nav>
      <nav class="footer-nav">
        <!-- <div class="footer-nav-item"><a class="footer-nav-item-link" target="_blank"
            rel="noopener external nofollow noreferrer" href="#">Patner</a></div>
            <div class="footer-nav-item"><a class="footer-nav-item-link" target="_blank"
            rel="noopener external nofollow noreferrer" href="#">Element OpenDAO</a></div> -->

        <div class="footer-nav-item">
          <a
            class="footer-nav-item-link"
            target="_blank"
            rel="noopener external nofollow noreferrer"
            href="https://medium.com/@brcdao"
            >Medium</a
          >
        </div>
        <div class="footer-nav-item">
          <a
            class="footer-nav-item-link"
            target="_blank"
            rel="noopener external nofollow noreferrer"
            href="https://t.me/brcdao/"
            >Telegram</a
          >
        </div>
        <div class="footer-nav-item">
          <a
            class="footer-nav-item-link"
            target="_blank"
            rel="noopener external nofollow noreferrer"
            href="https://unisat.io/brc20/Majo/"
            >$Majo</a
          >
        </div>
      </nav>
    </footer>
    <div class="foot_btm_box">
      <div class="btm_tit">STRATEGIC PARTNERSHIPS</div>
      <div class="blue_wait"></div>
      <div class="btm_btn_box">
        <div class="dan_btn">
          <img src="../assets/Element.svg" alt="" />
        </div>
        <div class="dan_two_box">
          <img src="../assets/three.jpg" alt="" />
        </div>
        <div class="dan_two_box">
          <img src="../assets/logo.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tit_box {
  display: flex;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  .font {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #fff;
  }
}
.index-header-logo {
  img {
    margin-top: 15px;
    margin-left: 10px;
  }
}
.foot_btm_box {
  margin: 0px auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  .btm_tit {
    line-height: 45px;
    text-align: center;
    font-size: 45px;
    color: #fff;
    font-weight: 700;
  }
  .blue_wait {
    height: 6px;
    width: 120px;
    border-radius: 5px;
    background-color: #537dce;
    margin-top: 40px;
  }
  .btm_btn_box {
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    .dan_btn {
      height: 150px;
      width: 280px;
      border-radius: 20px;
      background-color: #1d2022;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      margin-top: 20px;
      img {
        height: 50px;
        width: 210px;
      }
    }
    .dan_two_box {
      height: 150px;
      width: 280px;
      border-radius: 20px;
      background-color: #1d2022;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      margin-top: 20px;
      img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
      }
    }
  }
}
</style>
