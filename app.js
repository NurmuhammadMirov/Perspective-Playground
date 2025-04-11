Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      color: '#8D81F3'
    }
  }, 
  computed: {
    box() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `,
        background: this.color
      }
    }
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.color = '#8D81F3';
    },
    async copy() {
      let text = `transform:${this.box.transform};background: "${this.box.background}";`
      await navigator.clipboard.writeText(text);

      alert("CSS Copied to Clipboard!");
    },
    colorChange(e) {
      this.color = e.target.value;
    }
  }
}).mount('#app');