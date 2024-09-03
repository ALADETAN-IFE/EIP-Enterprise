import React, { useState, useEffect } from "react";
import {
  EmployeesPageMainBody,
  EmployeesPageMainBodyWrapper,
  EmployeesPageHeaderSection,
  EmployeesPageHeaderSectionWrapper,
  EmployeesSearchBar,
  EmployeesSection,
  EmployeesSectionWrapper,
  EmployeesHeadSection,
  EmployeesAdd,
  EmployeesCardWrapper,
  EmployeesCardEmpty,
  CardExplainDetails,
} from "./EmployeesPageStyle";
import { BsPerson, BsPlus } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const EmployeesPage = () => {
  const { CompanyId } = useParams();
  const { employeeId } = useParams();

  const [loading, setloading] = useState(false);
  // const [SearchInput, setSearchInput] = useState()
  const [Search, setSearch] = useState(0);
  const [EmployeesData, setEmployeesData] = useState([
    1, 4, 2, 2, 2, 2, 8, 8, 8,
    1, 4, 2, 2, 2, 2, 8, 8, 8,
    1, 4, 2, 2, 2, 2, 8, 8, 8,
    1, 4, 2, 2, 2, 2, 8, 8, 8,
  ]);
  const [EmployeesDataSearch, setEmployeesDataSearch] = useState([1]);


  // Docker Fisherman1
  // const adminId = useSelector((state) => state.CompanyManagement.UserData._id)

  const Navigate = useNavigate();
  const AddEmployee = () => {
    Navigate(`/eip/employee/add-employee/${CompanyId}`);
  };

  const handleSearch = (e) => {
    // const filterSearchEmployees = e.target.value
    const filterSearchEmployeesLowercase = e.target.value.toLowerCase();
    // setSearchInput(filterSearchEmployees);
    if (filterSearchEmployeesLowercase.trim() == "") {
      setSearch(0);
      setEmployeesDataSearch(EmployeesData);
    } else {
      const filterEmployees = EmployeesDataSearch.filter((e) =>
        e.fullName.toLowerCase().includes(filterSearchEmployeesLowercase)
      );
      if (filterEmployees.length < 1) {
        setSearch(2);
      } else {
        setSearch(1);
        setEmployeesDataSearch(filterEmployees);
      }
    }
  };

  const loadDatas = async () => {
    const url = "https://company-management-3iyh.onrender.com/api";
    setloading(true);

    try {
      const response = await axios.get(
        `${url}/employee/get-all-employees/${CompanyId}`
      );
      console.log(response?.data);
      console.log(response?.data.data);
      setEmployeesData(response?.data.data);
      setEmployeesDataSearch(response?.data.data);
      toast.success(response?.data.message);

      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);

      console.log(error?.response.data.message);
      console.log(error?.response.status);
      toast.error(error?.response.data.message);
      if (error?.response.data.message == "No Authorization found") {
        setTimeout(() => {
          toast.error("Please Login");
          Navigate(`/`);
        }, 1200);
      }
    }
  };
  useEffect(() => {
    loadDatas();
  }, []);
  useEffect(() => {
    console.log(CompanyId, "CompanyId");
  });



  return (
    <EmployeesPageMainBody>
      <EmployeesPageMainBodyWrapper>
        <EmployeesPageHeaderSection>
          <EmployeesPageHeaderSectionWrapper>
            <h3>Employees</h3>
            <EmployeesSearchBar>
              <BiSearch size={25} color="#ca6848" />
              <input
                type="text"
                placeholder="search Employee by name"
                onChange={handleSearch}
              />
            </EmployeesSearchBar>
          </EmployeesPageHeaderSectionWrapper>
        </EmployeesPageHeaderSection>
        <EmployeesSection>
          <EmployeesSectionWrapper>
            <EmployeesHeadSection>
              {Search == 0 && EmployeesData?.length >= 2 ? (
                <h6>
                  <span>{EmployeesData?.length}</span>Employees
                </h6>
              ) : Search == 1 && EmployeesDataSearch?.length >= 2 ? (
                <h6>
                  <span>{EmployeesDataSearch?.length}</span>Employees
                </h6>
              ) : Search == 0 && EmployeesData?.length < 2 ? (
                <h6>
                  <span>{EmployeesDataSearch?.length}</span>Employee
                </h6>
              ) : Search == 1 && EmployeesDataSearch?.length < 2 ? (
                <h6>
                  <span>{EmployeesDataSearch?.length}</span>Employee
                </h6>
              ) : (
                <h6>
                  <span>0</span>Employee
                </h6>
              )} 
              <EmployeesAdd onClick={AddEmployee}>
                <BsPlus size={25} /> Add Employees
              </EmployeesAdd>
            </EmployeesHeadSection>
            <CardExplainDetails>
              <p> Full name</p>
              <p> Role</p>
              <p>
                <MdOutlineMail />
                Email
              </p>

              <p>
                <MdOutlinePhoneInTalk />
                PhoneNumber
              </p>
            </CardExplainDetails>
            <div style={{ width: "100%", height: "75%", 
            // background: "pink",
               display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <EmployeesCardWrapper>
                {
                  Search == 0 ? 
                  <>
                    {
                    EmployeesData?.map((employees, i) => (
                      <EmployeeCard
                        key={employees?._id}
                        employees={employees}
                        i={i + 1}
                        loadDatas={loadDatas}
                        CompanyId={CompanyId}
                        loading={loading}
                        employeeId={employeeId}
                      />
                    ))
                    }
                  </>
                 : Search == 1 ? 
                  <>
                    {
                    EmployeesDataSearch?.map((employees, i) => (
                      <EmployeeCard
                        key={employees?._id}
                        employees={employees}
                        i={i}
                        loadDatas={loadDatas}
                        CompanyId={CompanyId}
                        loading={loading}
                        employeeId={employeeId}
                      />
                    ))
                    }
                  </>
                 : Search == 2 ? 
                  <EmployeesCardEmpty>
                    no employee is associated with such name
                  </EmployeesCardEmpty>
                 : null
                }
              </EmployeesCardWrapper>          
             
              
            </div>
          </EmployeesSectionWrapper>
        </EmployeesSection>
      </EmployeesPageMainBodyWrapper>
    </EmployeesPageMainBody>
  );
};

export default EmployeesPage;
