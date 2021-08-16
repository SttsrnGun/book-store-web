export const strict = false;

export const state = () => ({
  loading: false,
  cartCount: 0,
//   siderCollapsed: true,
//   idToken: "",
});
export const actions = {
  async logout() {
    await this.$auth.logout("local");
    await this.$router.push("/login");
  },
    // preload default data goes here
    async loadDefaultData({ dispatch, state }) {
      let userMe = await this.$auth.$storage.getState("userMe");
      state.cartCount = await userMe["data"]["cartsCount"];
    }
};