<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-py-sm bg-green" :class="sizes">
      <q-toolbar class="text-white">
        <img
          src="/images/logo.svg"
          class="cursor-pointer"
          height="50"
          width="100"
          @click="$router.push('/')"
        />

        <q-space />
        <q-tabs>
          <q-route-tab
            label="Home"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/"
            exact
          />
          <q-route-tab
            label="About Us"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/about"
            exact
          />
          <q-route-tab
            label="Membership"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/membership"
            exact
          />
          
            <q-btn-dropdown flat class="leadership leader" label="Leadership">
              <q-list>
                <q-item active-class="primary" exact clickable to="leadership" v-close-popup>
                  <q-item-section>
                    <q-item-label>Executive Council</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item active-class="primary" exact clickable to="/board" v-close-popup>
                  <q-item-section>
                    <q-item-label>Board of Trustees</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          
        
         
          <!-- <q-route-tab
            label="Leadership"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/leadership"
            exact
          /> -->
          <q-route-tab
            label="Partners"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/partner"
            exact
          />
          <!-- <q-route-tab
            label="Board"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/Board"
            exact
          /> -->
          <q-route-tab
            label="News"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/news"
            exact
          />
          <q-route-tab
            label="Contact Us"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/contact"
            exact
          />
        </q-tabs>
        <div class="q-pa-sm lt-md">
          <q-btn flat round dense icon="menu" class="q-mr-sm">
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Home"
                        to="/"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="About Us"
                        to="/about"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Membership"
                        to="/membership"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-btn-dropdown flat class="leadership" label="Leadership">
                    <q-list>
                      <q-item active-class="primary" exact clickable to="leadership" v-close-popup>
                        <q-item-section>
                          <q-item-label>Executive Council</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item active-class="primary" exact clickable to="/board" v-close-popup>
                        <q-item-section>
                          <q-item-label>Board of Trustees</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Partners"
                        to="/partner"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="News"
                        to="/news"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Contact Us"
                        to="/contact"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    sizes() {
      let size = this.$q.screen.name;
      if (size == "md" || size == "lg" || size == "xl") {
        return "q-px-xl ";
      } else return "";
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: poppins-black;
  src: url("/fonts/poppins/Poppins-Black.ttf");
}

@font-face {
  font-family: poppins-extraBold;
  src: url("/fonts/poppins/Poppins-ExtraBold.ttf");
}

@font-face {
  font-family: poppins-bold;
  src: url("/fonts/poppins/Poppins-Bold.ttf");
}

@font-face {
  font-family: poppins-regular;
  src: url("/fonts/poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: poppins-italic;
  src: url("/fonts/poppins/Poppins-Italic.ttf");
}

@font-face {
  font-family: poppins-boldItalic;
  src: url("/fonts/poppins/Poppins-BoldItalic.ttf");
}

@font-face {
  font-family: poppins-light;
  src: url("/fonts/poppins/Poppins-Light.ttf");
}

@font-face {
  font-family: poppins-thin;
  src: url("/fonts/poppins/Poppins-Thin.ttf");
}

.my-font-poppins-black {
  font-family: "poppins-black";
}

.my-font-poppins-extraBold {
  font-family: "poppins-extraBold";
}

.my-font-poppins-bold {
  font-family: "poppins-bold";
}

.my-font-poppins-regular {
  font-family: "poppins-regular";
}

.my-font-poppins-italic {
  font-family: "poppins-italic";
}

.my-font-poppins-boldItalic {
  font-family: "poppins-boldItalic";
}

.my-font-poppins-light {
  font-family: "poppins-light";
}

.my-font-poppins-thin {
  font-family: "poppins-thin";
}
</style>
