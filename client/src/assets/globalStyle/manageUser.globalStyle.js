import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
            font-family: Arial, sans-serif;
            // margin: 20px;
           
            display: flex;
            width:100%;
        }
            

html, body {
    height: 100%;
    margin: 0;  
    padding: 0; 
}
/* Đảm bảo #root chiếm toàn bộ không gian */
#root {
    display: flex;
    flex-direction: column;  
    height: 100%;  
    width: 100%;   
}
            .row{
 display: flex; /* Sử dụng Flexbox */
    justify-content: space-between; /* Giãn đều khoảng cách giữa các phần tử */
    align-items: flex-start; /* Căn phần tử theo chiều dọc (top align) */
    width:100%;
    height:100%;
}
    .column{
        display:flex;
        flex-direction:column;
        justify-content: space-between;   
        height: 100%; 
    }

        .sidebar {
            width: 200px;
            background-color: #f4f4f4;
            border-radius: 8px;
            padding: 20px;
            margin-right: 20px;
            height:100%;
        }

        .sidebar a {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 10px;
        }

        .sidebar a:hover {
            background-color: #ddd;
        }

        .sidebar .spacer {
            height: 200px;
        }

        .sidebar .logout {
            color: red;
        }

        .dashboard {
            flex-grow: 1;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            padding:20px;
            margin:10px;
            width: 100%; 
        }

        .add-button {
            background-color: #f1c40f;
            color: white;
            border: none;
            padding: 15px 0;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            text-align: center;
            display: block;
            margin-top: 20px;
        }

        .add-button:hover {
            background-color: #d4ac0d;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        thead {
            background-color: #f4f4f4;
        }

        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            cursor: pointer;
        }

        th:hover {
            background-color: #eaeaea;
        }

        tbody tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tbody tr:hover {
            background-color: #f1f1f1;
        }

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .delete-button {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
        }

        .delete-button:hover {
            background-color: #c0392b;
        }

        select {
            padding: 6px;
            border-radius: 4px;
        }
.note {
    background-color: #ffcc00;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    padding: 2px 5px;
    margin-left: 10px;
}


`;
export default GlobalStyle;
