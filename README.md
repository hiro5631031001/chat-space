# DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :messasges
- has_many :groups_users
- has_many  :groups, through:  :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|massage_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many  :users, through:  :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



