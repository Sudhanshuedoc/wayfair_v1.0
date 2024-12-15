import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Mock search results (in a real app, this would be an API call)
  const mockSearchResults = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Smartphone", category: "Electronics" },
    { id: 3, name: "Headphones", category: "Accessories" },
    { id: 4, name: "Wireless Charger", category: "Accessories" },
    { id: 5, name: "Smart Watch", category: "Wearables" },
  ];

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      // Filter mock results based on search query
      const filteredResults = mockSearchResults.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsDropdownOpen(true);
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      margin: "auto",
      padding: "15px",
      backgroundColor: "#ffffff",
      // boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#333",
    },
    searchContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "800px",
    },
    searchWrapper: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "13px",
      overflow: "hidden",
    },
    searchIcon: {
      padding: "10px",
      color: "#888",
    },
    searchInput: {
      flex: 1,
      border: "none",
      padding: "10px",
      fontSize: "16px",
      outline: "none",
    },
    searchDropdown: {
      position: "absolute",
      top: "100%",
      left: 0,
      width: "100%",
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderTop: "none",
      borderRadius: "0 0 10px 10px",
      maxHeight: "300px",
      overflowY: "auto",
      zIndex: 10,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    dropdownItem: {
      padding: "10px",
      borderBottom: "1px solid #f1f1f1",
      cursor: "pointer",
    },
    actionsContainer: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    actionItem: {
      color: "#333",
      cursor: "pointer",
      textDecoration: "none",
      fontSize: "16px",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Company Name */}
      <div style={styles.logo}>
        <img
          src="https://bl-i.thgim.com/public/incoming/13yll7/article68367341.ece/alternates/FREE_1200/wayfair.png"
          width="150px"
          height="36px"
          alt=""
        />
      </div>

      {/* Search Bar with Dropdown */}
      <div style={styles.searchContainer} ref={dropdownRef}>
        <div style={styles.searchWrapper}>
          <div style={styles.searchIcon}>🔍</div>
          <input
            type="text"
            placeholder="Find anything home..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
        </div>
        {isDropdownOpen && searchResults.length > 0 && (
          <div style={styles.searchDropdown}>
            {searchResults.map((result) => (
              <div
                key={result.id}
                style={styles.dropdownItem}
                onClick={() => {
                  setSearchQuery(result.name);
                  setIsDropdownOpen(false);
                }}
              >
                {result.name} - {result.category}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div style={styles.actionsContainer}>
        <span style={styles.actionItem}>
          <i class="fa-solid fa-cart-shopping"></i> Cart
        </span>
        <span style={styles.actionItem}>
          <i class="fa-solid fa-cart-shopping"></i> Login
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
