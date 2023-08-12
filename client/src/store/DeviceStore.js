import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "holodos" },
      { id: 2, name: "phones" },
      { id: 3, name: "tv" },
      { id: 4, name: "laptops" },
    ];
    this._brands = [
      { id: 1, name: "smausng" },
      { id: 2, name: "apple" },
      { id: 3, name: "lenovo" },
      { id: 4, name: "asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "12 pro",
        price: 1000000,
        rating: 5,
        img: "c7ca2244-acaa-4291-8a4a-87c586df2cd3.jpg",
      },
      {
        id: 2,
        name: "12 pro",
        price: 1000000,
        rating: 5,
        img: "c7ca2244-acaa-4291-8a4a-87c586df2cd3.jpg",
      },
      {
        id: 3,
        name: "12 pro",
        price: 1000000,
        rating: 5,
        img: "c7ca2244-acaa-4291-8a4a-87c586df2cd3.jpg",
      },
      {
        id: 4,
        name: "12 pro",
        price: 1000000,
        rating: 5,
        img: "c7ca2244-acaa-4291-8a4a-87c586df2cd3.jpg",
      },
      {
        id: 5,
        name: "12 pro",
        price: 1000000,
        rating: 5,
        img: "c7ca2244-acaa-4291-8a4a-87c586df2cd3.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
