<template>
    <div class="wrapper">
        <div class="logo" @click="navigateToHomePage">
            <img :src="StorefrontImage" alt="" />
            <p>NFT Marketplace</p>
        </div>
        <!-- nav PC -->
        <div class="navigateItem hide-on-nav">
            <ul>
                <li class="scale-transition">
                    <router-link to="/marketplace">Marketplace</router-link>
                </li>
                <li class="scale-transition">
                    <router-link to="/ranking">Rankings</router-link>
                </li>
                <li class="scale-transition">
                    <router-link to="/connect-wallet">Connect a wallet</router-link>
                </li>
                <li>
                    <base-button name="Sign up" :icon="userImage" paddingHorizonral="30px" />
                </li>
            </ul>
        </div>
        <label for="nav-mobile-input" class="dropdown-nav show-on-dropdown-nav">
            <img :src="listImage" alt="" />
        </label>
        <input type="checkbox" name="" id="nav-mobile-input">
        <label class="nav-overlay" for="nav-mobile-input"></label>
        <div class="nav-mobile">
            <label for="nav-mobile-input">
                <img :src="XmarkColidIcon" alt="" />
            </label>
            <ul class="nav-mobile-list">
                <li>
                    <router-link to="#">Marketplace</router-link>
                </li>
                <li>
                    <router-link to="#">Rankings</router-link>
                </li>
                <li>
                    <router-link to="#">Connect a wallet</router-link>
                </li>
                <li>
                    <router-link to="#">Sign up</router-link>
                </li>
                <!-- <li>
          <base-button
            name="Sign up"
            :icon="userImage"
            paddingHorizonral="30px"
          />
        </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import BaseButton from "../ui/buttons/BaseButton.vue";
export default {
    data() {
        return {
            StorefrontImage: require("../../assets/icons/Storefront.svg"),
            userImage: require("../../assets/icons/User.svg"),
            listImage: require("../../assets/icons/List.svg"),
            XmarkColidIcon: require("../../assets/fontawesome/xmark-solid.svg")
        };
    },
    components: {
        BaseButton,
    },
    methods: {
        navigateToHomePage() {
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.wrapper {
    background: var(--bg-dark);
    display: flex;
    height: 100px;
    padding: 20px 50px;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

ul {
    list-style-type: none;
}

ul li {
    display: inline-block;
    margin: 0 20px;
}

ul li a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
}

ul li a:hover {
    /* cursor: context-menu; */
    cursor: pointer;
}

.logo {
    display: flex;
    cursor: pointer;
}

.logo p {
    margin-left: 12px;
    line-height: 32px;
    font-size: 22px;
}

.navigateItem a.router-link-active{
    color: var(--main-color);
}

.dropdown-nav {
    display: none;
}

.nav-mobile {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    max-width: 100%;
    background: #383535;
    padding: 50px 10px;
    transform: translateX(100%);
    opacity: 0;
    transition: transform linear 0.2s, opacity linear 0.2s;
}

.nav-mobile img {
    width: 27px;
    height: 27px;
    position: absolute;
    right: 1rem;
    top: 1rem
}

.nav-mobile-list li {
    display: block;
    margin-bottom: 18px;
}

.nav-overlay {
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    display: none;
    animation: fadeIn linear 0.2s;
}

#nav-mobile-input {
    display: none;
}

#nav-mobile-input:checked~.nav-overlay {
    display: block;
}

#nav-mobile-input:checked~.nav-mobile {
    transform: translateX(0%);
    opacity: 1;
}



@media (max-width: 1279px) {
    .hide-on-nav {
        display: none;
    }

    .show-on-dropdown-nav {
        display: block;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
