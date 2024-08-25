# Food-Order

A food ordering website built with React and TailwindCSS. This project allows users to explore a menu of dishes, interact with various pages, and perform user authentication.

## Features

- **Home Page**: Features a hero section with an "Order Now" button that navigates to the menu page.
- **Menu Page**: Displays a list of dishes with options to view details and add items to the cart.
- **Contact Us Page**: Provides a form for users to contact the support team.
- **Login Page**: Allows users to log in to their account.
- **Signup Page**: Provides a form for users to create a new account.
- **Responsive Design**: Fully responsive with a hamburger menu for mobile devices.

## Add to Cart Functionality

The website includes a cart feature that allows users to add dishes to their cart, view items in the cart, and adjust quantities. 

### How It Works:

1. **Adding Items to Cart**:
    - On the Menu Page, users can click the "Add to Cart" button on each dish card.
    - The item will be added to the cart, and the cart will be updated accordingly.

2. **Viewing Cart**:
    - Users can navigate to the Cart page to view all items added to their cart.
    - Each item in the cart displays its image, name, price, and a "Remove" button to remove it from the cart.

3. **Adjusting Quantity**:
    - Users can increase or decrease the quantity of each item directly from the Cart page using plus and minus icons.
    - The total price is updated automatically based on the quantity of items.

4. **Removing Items**:
    - Users can remove items from the cart using the "Remove" button next to each item.
    - The cart will be updated in real-time to reflect the removal.

5. **Clearing the Cart**:
    - Users can clear all items in the cart using the "Clear Cart" button.

### Implementation

- **State Management**: The cart functionality is managed using Zustand, a state management library for React. The store includes actions for adding, removing, and updating items in the cart.
- **Components**: The cart functionality is implemented in components such as `Cart`, `ExploreMenu`,`Menu` and `TopDishes`, with appropriate actions and state management.

## Technologies

- **React**: Frontend library for building the user interface.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Router**: For client-side routing.
- **React Icons**: For icons used in the UI.
- **Zustand**: For state management.

## Setup

This project uses Vite for fast development and build processes. Two official plugins are available:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses Babel for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses SWC for Fast Refresh.

## Installation

### Clone the Repository:

https://github.com/AleemAhmad3/Food-Order.git

### Navigate to the Project Directory:

Run cd food-order in your terminal.

### Install Dependencies:

Execute npm install to install the necessary packages.

### Run the Development Server:

Start the server with npm Start.
Open in Browser.



## Screenshots

Here are some screenshots of the website:

- **Signin Page**:
    ![Signin](https://github.com/user-attachments/assets/5a02256c-0a72-471e-aa99-ea3d39bbc635)
- **Signup Page**:
    ![Signup](https://github.com/user-attachments/assets/d529dac0-bb94-4a9e-ad26-b17e9a46bc06)
- **Hero Section**:
    ![hero](https://github.com/user-attachments/assets/c3aeef63-b084-4ad5-a9e0-38bdd27049ca)
- **Explore Menu Section**:
    ![Explore](https://github.com/user-attachments/assets/2a4d8d1d-dab3-497b-a1e7-a85621121470)
- **Top Dishes Section**:
    ![Top](https://github.com/user-attachments/assets/a41f9582-83a1-4f2e-98d5-bc7a2cec03ca)
- **About Page**:
    ![About](https://github.com/user-attachments/assets/5619f006-1683-41fc-be8c-b295a87b24ee)
- **Review Section**:
    ![Review](https://github.com/user-attachments/assets/784ec39a-879a-43eb-a97a-eb71464ff124)
- **Footer Section**:
    ![Footer](https://github.com/user-attachments/assets/7d7ea589-7d06-442f-b0c5-9e1d47eea6cf)
- **Menu Page**:
    ![Menu](https://github.com/user-attachments/assets/b5abe85a-403c-4b00-9d2a-ac5054d37269)

 - **Cart Page**:
       ![Cart](https://github.com/user-attachments/assets/24ccaa2c-0783-43fd-8db2-42c72e3f13ed)

- **Contact Us Page**:
    ![Contact](https://github.com/user-attachments/assets/8aaf7175-5047-484c-8432-b26cfa51497e)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
