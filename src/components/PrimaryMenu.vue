<template>
    <ul class="navigation-primary">

            <nuxt-link to="/" tag="li" exact-active-class="selected"><a><img src="css/engraving-25-accounting.gif" alt=""/>КЛС Групп</a></nuxt-link>
            <nuxt-link to="/finance" tag="li" exact-active-class="selected"><a><img src="css/engraving-25-recordskeeping.gif" alt=""/>КЛС-Финанс</a></nuxt-link>
            <nuxt-link to="/trade" tag="li" exact-active-class="selected"><a><img src="css/engraving-25-legal.gif" alt=""/>КЛС-Трейд</a>
            </nuxt-link>
            <nuxt-link to="/contacts" tag="li" exact-active-class="selected"><a><img src="css/engraving-25-consulting.gif" alt=""/>Контакты</a></nuxt-link>
    </ul>
</template>
<script>
    export default {
        transition: 'bounce'
    }
</script>
