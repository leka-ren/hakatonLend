const stateShow = {
    value: false,
}

function stateShowToggle() {
    return stateShow.value = !stateShow.value;
}

export default stateShowToggle;