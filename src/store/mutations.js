export const mutations = {
    setBackGround(state, color) {
        state.background.color = color;
    },
    setIcon(state, color) {
        state.icon.color = color;
    },
    setFont(state, color) {
        state.font.color = color;
    },
    changeTabActiveIndex(state, activeIndex) {
        state.tab.activeIndex = activeIndex;
    },
    setCoverBox(state, show) {
        state.coverBox.show = show;
    },
    setLanguage(state, language) {
        state.language = language;
    },
    init(state, NewState) {
        state = NewState;
    }
}