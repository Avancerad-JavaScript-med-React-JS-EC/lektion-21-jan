const increment = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export default increment;