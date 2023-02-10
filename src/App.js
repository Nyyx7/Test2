import * as React from "react";
import "./App.css";
import menuIcons5 from "./assets/menuIcons5.svg";
import menuIcons from "./assets/menuIcons.svg";
import minotification from "./assets/minotification.svg";
import ellipse25 from "./assets/ellipse25.png";
import materialSymbolsadd from "./assets/materialSymbolsadd.svg";
import ellipse26 from "./assets/ellipse26.png";
import filter from "./assets/filter.svg";
import group20424 from "./assets/group20424.svg";
import ellipse2 from "./assets/ellipse2.png";
import ellipse24 from "./assets/ellipse24.png";
import materialSymbolskeyb from "./assets/materialSymbolskeyb.svg";
import menuIcons2 from "./assets/menuIcons2.svg";
import filter1 from "./assets/filter1.svg";
import group20425 from "./assets/group20425.svg";
import mediumplus from "./assets/mediumplus.svg";
import menuIcons6 from "./assets/menuIcons6.svg";
import menuIcons4 from "./assets/menuIcons4.svg";
import group20422 from "./assets/group20422.svg";
import vector from "./assets/vector.svg";
import line41 from "./assets/line41.svg";
import column5 from "./assets/column5.svg";
import group2042 from "./assets/group2042.svg";
import menuIcons7 from "./assets/menuIcons7.svg";
import icon from "./assets/icon.svg";
import group20421 from "./assets/group20421.svg";
import ellipse23 from "./assets/ellipse23.png";
import group20426 from "./assets/group20426.svg";
import ellipse21 from "./assets/ellipse21.png";
import menuIcons3 from "./assets/menuIcons3.svg";
import menuIcons1 from "./assets/menuIcons1.svg";
import ellipse22 from "./assets/ellipse22.png";
import menuIcons8 from "./assets/menuIcons8.svg";
import line3 from "./assets/line3.svg";
import ellipse1100 from "./assets/ellipse1100.png";
import group20423 from "./assets/group20423.svg";
import materialSymbolsadd1 from "./assets/materialSymbolsadd1.svg";
import Field from "./components/Field";
import Group2073 from "./components/Group2073";
import LeftMenu from "./components/LeftMenu";
import FormControl from "react-bootstrap/FormControl";
import Component13 from "./components/Component13";
const App = () => {
  const propsData = {
    leftMenu: {
      menuElemnt24: {
        aradei: "Foot fall",
        menuIcons8: menuIcons6,
      },
      menuElemnt12: {
        aradei: "Permission",
        menuIcons4: menuIcons3,
        materialSymbolsadd3: materialSymbolsadd1,
      },
      menuElemnt: {
        aradei: "Aradei",
        subMenuinactive: {
          malls: "Tenants",
        },
        menuIcons: menuIcons,
        subMenuinactive1: {
          malls: "Units",
        },
        subMenuactive: {
          malls: "Malls",
        },
        subMenuinactive2: {
          malls: "Brands",
        },
        line41: line41,
        materialSymbolsadd: materialSymbolsadd,
      },
      menuElemnt2: {
        menuIcons8: menuIcons2,
        aradei: "App users",
      },
      menuElemnt23: {
        aradei: "Media",
        menuIcons8: menuIcons8,
      },
      line3: line3,
      menuElemnt1: {
        menuIcons4: menuIcons1,
        materialSymbolsadd3: materialSymbolsadd1,
        aradei: "Content",
      },
      menuElemnt22: {
        menuIcons8: menuIcons7,
        aradei: "Wifi Hotspot",
      },
      menuElemnt11: {
        menuIcons4: menuIcons4,
        aradei: "Reciepts",
        materialSymbolsadd3: materialSymbolsadd1,
      },
      menuElemnt21: {
        menuIcons8: menuIcons5,
        aradei: "Support",
      },
    },
    component13: {
      materialSymbolskeyb: materialSymbolskeyb,
      manalRachidi: "Manal Rachidi",
      ellipse1100: ellipse1100,
      malls: "Malls",
      minotification: minotification,
      manager: "Manager",
    },
    field: {
      vector1: vector,
      select: "Mall",
    },
    field1: {
      size: "lg",
      placeholder: "Address",
    },
    field2: {
      select: "City",
      vector1: vector,
    },
    group2073: {
      page: "1",
      page: "9",
      page: "2",
      icon: icon,
      page: "8",
      text: {
        text: "2",
      },
      goToPage: "Go to page",
      page: "3",
      displayingPage1Of: "Displaying page1 of 24 results   ",
      hozfnedjaapkz: "...",
      page: "10",
    },
  };
  return (
    <div className="evaluations">
      <LeftMenu className="left-menu-instance-1" {...propsData.leftMenu} />
      <div className="flex-container">
        <Component13
          className="component-13-instance-1"
          {...propsData.component13}
        />
        <div className="flex-container-1">
          <Field className="field-instance" {...propsData.field} />
          <FormControl className="field-1-instance-1" {...propsData.field1} />
          <Field className="field-2-instance-1" {...propsData.field2} />
          <img className="filter" src={filter} />
          <img className="filter-1" src={filter1} />
          <button className="component-10">
            <img className="mediumplus" src={mediumplus} />
            <span className="add-mall">Add Mall</span>
          </button>
        </div>
        <div className="frame-2021">
          <div className="rectangle-17018">
            <div className="flex-container-2">
              <div className="column-header-6">Name</div>
              <div className="flex-container-3">
                <div className="column-header-3">Address</div>
                <div className="column-header-4">
                  <span className="column-header">City</span>
                </div>
              </div>
              <div className="column-header-5">
                <span className="column-header-1">Description</span>
              </div>
            </div>
            <hr className="line-4" />
            <div className="flex-container-4">
              <div className="flex-container-5">
                <div className="column-1">
                  <div className="group-105">
                    <div className="bicard-image" />
                    <img className="ellipse-2" src={ellipse2} />
                  </div>
                  <span className="cell-text">Borj Fez</span>
                </div>
                <div className="column-3">Avenue Allal Al Fassi</div>
              </div>
              <div className="column-4">fez</div>
              <div className="flex-container-6">
                <span className="column-5">
                  un centre commercial situé à Fès qui sétend sur trois
                  niveaux... 
                </span>
              </div>
              <img className="group-2042" src={group2042} />
            </div>
            <hr className="line-5" />
            <div className="flex-container-7">
              <div className="flex-container-8">
                <div className="column-1-1">
                  <div className="group-105-1">
                    <div className="bicard-image-1" />
                    <img className="ellipse-21" src={ellipse21} />
                  </div>
                  <span className="cell-text-2">Borj Fez</span>
                </div>
                <div className="column-3-1">Avenue Allal Al Fassi</div>
              </div>
              <div className="column-4-1">fez</div>
              <div className="flex-container-9">
                <span className="cell-text-3">
                  un centre commercial situé à Fès qui sétend sur trois
                  niveaux..
                </span>
              </div>
              <img className="group-20421" src={group20421} />
            </div>
            <hr className="line-15" />
            <div className="flex-container-10">
              <div className="flex-container-11">
                <div className="column-1-2">
                  <div className="group-105-2">
                    <div className="bicard-image-2" />
                    <img className="ellipse-22" src={ellipse22} />
                  </div>
                  <span className="cell-text-4">Borj Fez</span>
                </div>
                <div className="column-3-2">Avenue Allal Al Fassi</div>
              </div>
              <div className="column-4-2">fez</div>
              <div className="flex-container-12">
                <span className="cell-text-5">
                  un centre commercial situé à Fès qui sétend sur trois
                  niveaux...
                </span>
              </div>
              <img className="group-20422" src={group20422} />
            </div>
            <hr className="line-16" />
            <div className="flex-container-13">
              <div className="flex-container-14">
                <div className="column-1-3">
                  <div className="group-105-3">
                    <div className="bicard-image-3" />
                    <img className="ellipse-23" src={ellipse23} />
                  </div>
                  <span className="cell-text-6">Borj Fez</span>
                </div>
                <div className="column-3-3">Avenue Allal Al Fassi</div>
              </div>
              <div className="column-4-3">fez</div>
              <div className="flex-container-15">
                <span className="cell-text-7">
                  un centre commercial situé à Fès qui sétend sur trois
                  niveaux...
                </span>
              </div>
              <img className="group-20423" src={group20423} />
            </div>
            <hr className="line-17" />
            <div className="flex-container-16">
              <div className="flex-container-17">
                <div className="column-1-4">
                  <div className="group-105-4">
                    <div className="bicard-image-4" />
                    <img className="ellipse-24" src={ellipse24} />
                  </div>
                  <span className="cell-text-8">Borj Fez</span>
                </div>
                <div className="column-3-4">Avenue Allal Al Fassi</div>
              </div>
              <div className="column-4-4">fez</div>
              <div className="flex-container-18">
                <span className="cell-text-9">
                  un centre commercial situé à Fès qui sétend sur trois
                  niveaux...
                </span>
              </div>
              <img className="group-20424" src={group20424} />
            </div>
            <hr className="line-18" />
            <div className="flex-container-19">
              <div className="flex-container-20">
                <div className="column-1-5">
                  <div className="group-105-5">
                    <div className="bicard-image-5" />
                    <img className="ellipse-25" src={ellipse25} />
                  </div>
                  <span className="cell-text-10">Borj Fez</span>
                </div>
                <div className="column-3-5">Avenue Allal Al Fassi</div>
              </div>
              <div className="column-4-5">fez</div>
              <div className="flex-container-21">
                <span className="cell-text-11">
                  un centre commercial situé à Fès qui sétend sur trois
                  niveaux...
                </span>
              </div>
              <img className="group-20425" src={group20425} />
            </div>
            <hr className="line-19" />
            <div className="flex-container-22">
              <div className="flex-container-23">
                <div className="column-1-6">
                  <div className="group-105-6">
                    <div className="bicard-image-6" />
                    <img className="ellipse-26" src={ellipse26} />
                  </div>
                  <span className="cell-text-12">Borj Fez</span>
                </div>
                <div className="column-3-6">Avenue Allal Al Fassi</div>
              </div>
              <div className="column-4-6">fez</div>
              <div className="flex-container-24">
                <span className="cell-text-13">
                  un centre commercial situé à Fès qui sétend sur trois
                  niveaux...
                </span>
              </div>
              <img className="group-20426" src={group20426} />
            </div>
            <hr className="line-20" />
            <Group2073
              className="group-2073-instance-1"
              {...propsData.group2073}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
