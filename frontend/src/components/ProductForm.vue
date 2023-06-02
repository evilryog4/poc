<template>
  <form @submit.prevent="saveProduct">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="product.name" required>
    </div>
    <div>
      <label for="price">Price:</label>
      <input type="number" id="price" v-model="product.price" required>
    </div>
    <div>
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="product.quantity" required>
    </div>
    <div>
      <button type="submit">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: 0,
        quantity: 0
      }
    };
  },
  methods: {
    saveProduct() {
      // Lógica para guardar el producto
      console.log('Product saved:', this.product);
      // Restablecer los campos del formulario
      this.product.name = '';
      this.product.price = 0;
      this.product.quantity = 0;
    }
  }
};
</script>

