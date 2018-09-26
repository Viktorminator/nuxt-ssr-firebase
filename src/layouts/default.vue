<template>
    <div>
        <div id="layout">
            <div id="header">
                <div class="logo">
                    <a href="/"></a>
                </div>
                <SecondaryMenu/>
                <ul class="navigation-phone">
                    <li class="phone">
                        <span class="ya-phone">+7 (495) 698-97-97</span>
                    </li>
                    <li>
                        <nuxt-link to="callme">Позвоните мне</nuxt-link>
                    </li>
                </ul>
                <PrimaryMenu/>
            </div>
            <div id="content">
                <nuxt/>
            </div>
            <div id="imprint">
                <div class="copyrights">
                    <p>©&nbsp;2012—2018
                        <br> ООО&nbsp;«Солидс»
                    </p>

                </div>
                <div class="address">
                    <p>Москва, ул. Земляной вал, дом 59, стр. 2, этаж 7, пом. № 11
                        <a class="nobr" href="kontaktyi.html">Контактная информация</a>
                    </p>
                </div>
                <form action="search/" class="search" method="get">
                    <input class="keywords" type="text" name="query" value="поиск"
                           onclick="if (this.value == 'поиск') {this.value = '';}"
                           onblur="if (this.value == '') {this.value = 'поиск';}"/>
                    <input class="go" type="image" value="Искать!" src="/css/i/search.gif"/>
                </form>
            </div>
        </div>


        <!--nuxt/-->
    </div>
</template>
<script>
    /* eslint-disable indent */
    import SecondaryMenu from '~/components/SecondaryMenu'
    import PrimaryMenu from "../components/PrimaryMenu";

    export default {
        components: {
            PrimaryMenu,
            SecondaryMenu
        }
    }
</script>
