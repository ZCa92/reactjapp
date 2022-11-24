import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/taskContext';

export default function Navbar() {
  const { search, handleSearch, searchWithName } = useContext(TaskContext);
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg">
        <Link class="navbar-brand" to="/">
          اپلیکیشن کارهای روزمره
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/tasks">
                کارها
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/tasks/add">
                اضافه کردن کار
              </Link>
            </li>
          </ul>
          <div className="search-part">
            <form class="form-inline my-2 my-lg-0">
              {/* <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="جستجوی کار"
                aria-label="Search"
                dir="rtl"
                // value={search}
                onChange={(e) => searchWithName(e.target.value)}
              /> */}
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="جستجوی کار"
                aria-label="Search"
                dir="rtl"
                // value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={handleSearch}
              >
                جستجو
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
