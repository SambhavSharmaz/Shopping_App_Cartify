const SearchPage = () => {
  return (
    <div>
      <h1>Search Page</h1>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <div>
        {/* Display search results here */}
      </div>
    </div>
  );
}

export {SearchPage};