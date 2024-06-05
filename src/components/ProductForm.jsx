import { useState } from "react";
function ProductForm() {
  const [form, setForm] = useState({});
  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={form.name}
            onChange={(event) => {
              setForm({ ...form, name: event.target.value });
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={form.image}
            onChange={(event) => {
              setForm({ ...form, image: event.target.value });
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={form.price}
            onChange={(event) => {
              setForm({ ...form, price: event.target.value });
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={form.description}
            onChange={(event) => {
              setForm({ ...form, description: event.target.value });
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button
          type="submit"
          onClick={() => {
            const newForm = {
              name: form.name,
              price: form.price,
              image: form.image,
              description: form.description,
            };
            alert(JSON.stringify(newForm, null, "\n"));
          }}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
