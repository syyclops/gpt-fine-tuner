## GPT Fine Tuner

**Purpose:** The purpose of this UI is to fine-tune the GPT-3 language model for building science and engineering applications. Engineers will be able to ask the model questions and provide feedback on the quality of the responses. This feedback will be used in a closed loop to continuously improve the model.

**User interface:**
The user interface will be a web-based application, with a simple and intuitive design. It will have the following components:

- A text input field for the user to enter questions.
- A text area to display the model's response.
- A rating system for the user to rate the quality of the response.
- A submit button to send the feedback to the model.

**Data Collection:**
The feedback provided by the users will be collected in a database. The data will include the user's question, the model's response, and the rating provided by the user. This data will be used to fine-tune the model.

**Model Fine-Tuning:**
The collected data will be used to fine-tune the GPT-3 model. The fine-tuning process will be carried out using the OpenAI API. The model will be fine-tuned on a regular basis, with the frequency of fine-tuning being determined by the volume of feedback received.

**Technical Requirements:**

- Frontend (React App)
- Web Server (Node JS & Express)
- Database (Postgreql)
- OpenAI Api
- Docker

### How to Run

- frontend
  - npm run dev
