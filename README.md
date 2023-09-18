# Project Name

- Node.js and npm installed on your machine.

1. **Download the code to your local machine.**

2. **Navigate to the project's root directory:**

   ```bash
   cd facebook-auth-backend

3. **Install dependencies:**

  ```bash
   npm install

4. **Create a .env file in the directory like .env.example and add your Facebook App ID:**

  ```bash
  MONGODB_URI=your-app-id-here

4. **Add your Facebook App ID to facebook.js file:**

5. **Start the Node development server:**

  ```bash
  nodemon app
  
- The application will be available at http://localhost:1.


## Getting Your Facebook App ID

Follow these steps to obtain your Facebook App ID:

1. **Create a Facebook Developer Account:**
   - If you don't have one, go to the [Facebook Developer website](https://developers.facebook.com/) and create a developer account.

2. **Create a New Facebook App:**
   - After logging in to your Facebook Developer account, click on "My Apps" in the top right corner, and then select "Create App."

3. **Choose App Category:**
   - Select "For Everything Else" as the app category.

4. **Provide App Details:**
   - Enter an App Display Name and an email address for the app contact.

5. **Create the App:**
   - Click on "Create App ID."

6. **Access Your App's Dashboard:**
   - Once your app is created, you'll be taken to the App Dashboard.

7. **Find Your App ID:**
   - On the App Dashboard, you'll see your App ID (appId) listed at the top of the page.

8. **For Getting Permissions of Insight Data:**
   - If you don't have one, go to the [Facebook Developer website](https://mixedanalytics.com/knowledge-base/import-facebook-page-data-to-google-sheets/#:~:text=Under%20%27permissions%27%2C%20you%20should,(located%20under%20%27Other%27).) and add these permissions read_insights, pages_show_list, ads_management, ads_read, pages_read_engagement, public_profile.

Now you have successfully obtained your Facebook App ID. You can use this App ID in your project's configuration for Facebook integration.
