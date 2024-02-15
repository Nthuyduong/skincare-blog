const state = {
    ingredients: [],
    paginate: {
        limit: 10,
        last: 0,
        current: 1,
        count: 0
    },
    // trạng thái loading khi gọi api
    loading: false,

    ingredient: {
        id: null,
        name: null,
        description: null,
        content: null,
    }
}

export default state;
