const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})


declare function SimpleVue<D,C,M>(options: {
  data: (this: {}) => D,
  computed: C & ThisType<D &  C>,
  methods:M & ThisType<D & M & (C extends Record<string,() => infer ReturnType> ? Record<string,ReturnType> : C)>
}): any
