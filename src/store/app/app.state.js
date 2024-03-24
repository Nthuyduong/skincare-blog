const state = {
    keyword: '',
    results: [],
    loadingSearch: false,
    paginate: {
        limit: 10,
        last: 0,
        current: 1,
        count: 0
    },
}

export default state;