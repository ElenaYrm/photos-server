## Server to photos app

Base: /api/

### Main routes:
- auth/
  - signup - POST - body required with email, password, username
  - login - POST - body required with email, password
  - refresh - GET
  - logout - POST
- photos - GET - required header Authorization: "Bearer {access token}"
- comments - required header Authorization: "Bearer {access token}"
  - / - POST - body required with photoId, userId, text
  - ?photo={photoId} - GET
  - /:id - DELETE
