#ENDPOINTS

======================
UserController
GET: /api/user/all [DONE]
-> List<UserDTO>
----------------------
GET: /api/user/allByTeam/{teamId} [DONE]
-> List<UserDTO>
----------------------
GET: /api/user/leaveTeam [DONE]
-> String (message)
----------------------
POST: /api/user/joinTeam [DONE]
Body: InviteCodeDTO -> inviteCode
-> TeamDTO
======================

======================
TeamController
POST: /api/team [DONE]
Body: TeamDTO
-> TeamDTO (full)
----------------------
DELETE: /api/team/{id} [DONE]
-> String (message)
======================

======================
TaskController
GET: /api/task/allByTeam [DONE]
-> List<TaskDTO>
----------------------
PATCH: /api/task/{id} [DONE]
Body: TaskDTO -> id(same), title, description, userId
-> TaskDTO
----------------------
POST: /api/task [DONE]
Body: TaskDTO -> title + description
-> TaskDTO (full)
----------------------
DELETE: /api/task/{id} [DONE]
-> String (message)
======================


