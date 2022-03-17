import React from "react";

const Create = () => {
  const handleSubmit = (e) => {
      e.preventDefault()
    console.log("hacer algo FINAL con el state");
  };

  const handleInput = () => {
    console.log("state-------");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create an ad:</h2>
        <br />

        <label>Headline:</label>
        <input
          type="text"
          name="name"
          // value={this.state.name}
          onChange={handleInput}
        />

        <br />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          // value={this.state.calories}
          onChange={handleInput}
        />
        <br />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          // value={this.state.image}
          onChange={handleInput}
        />
        <br />

        <br />
        <button type="submit">Create</button>
      </form>

      <br />
    </div>
  );
};
export default Create;
