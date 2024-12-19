import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
            font-family: Arial, sans-serif;
            margin: 20px;
            // display: flex;
        }
    section{
    display: flex;
    }
   .modal {
    display: none; /* Modal không hiển thị mặc định */
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.modal.show {
    display: flex; /* Hiển thị modal khi có class "show" */
}
.note {
    background-color: #ffcc00;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    padding: 2px 5px;
    margin-left: 10px;
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
            max-width: 1200px;
            flex: 1;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            padding: 20px;
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
            margin-top: 20px;
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

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
            text-align: center;
        }

        .modal input {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        .modal button {
            background-color: #f1c40f;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
        }

        .modal button:hover {
            background-color: #d4ac0d;
        }

        .close-button {
            background-color: #e74c3c;
            margin-top: 10px;
        }

        .close-button:hover {
            background-color: #c0392b;
        }
        @import url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');

        .sidebar-title {
            color: goldenrod;
            font-family: 'Lavishly Yours', cursive;  /* Apply the Lavishly Yours font */
            font-size: 2.5em;  /* Adjust the size as needed */
        }

`;
export default GlobalStyle;