<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app color="white" flat>
        <v-container class="py-0 fill-height">
          <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

          <v-btn v-for="link in links" :key="link" text>
            {{ link }}
          </v-btn>

          <v-spacer></v-spacer>

          <v-responsive max-width="260">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>

      <v-main class="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-sheet rounded="lg">
                <v-list color="transparent">
                  <v-list-item v-for="n in 5" :key="n" link>
                    <v-list-item-content>
                      <v-list-item-title> List Item {{ n }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider class="my-2"></v-divider>

                  <v-list-item link color="grey lighten-4">
                    <v-list-item-content>
                      <v-list-item-title> Refresh </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>

            <v-col>
              <v-sheet min-height="70vh" rounded="lg">
                <!--  -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    /* stylelint-disable */
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
