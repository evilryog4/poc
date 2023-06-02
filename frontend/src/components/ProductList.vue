<template>
  <div>
    <h2>Product List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 10, quantity: 5 },
        { id: 2, name: 'Product 2', price: 20, quantity: 10 },
        { id: 3, name: 'Product 3', price: 30, quantity: 15 }
      ]
    };
  }
};
</script>






