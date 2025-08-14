# API Config

**base url** : http://your_domain.com/api

## Folder

### Create Folder

**path** : /folder

**method** : POST

#### Request

Param : none

Body

```JavaScript
{
  "name" : "",
  "as_root": true,
  "parent_folder_id": 0
}
```

#### Response

Success (200)
```

{
  "name": "New Folder",
  "as_root": false,
  "parent_folder_id": 2,
  "as_parent": false,
  "as_child": true,
  "id": 35,
  "created_at": "2025-08-13T12:42:20.937Z",
  "updated_at": "2025-08-13T12:42:20.937Z"
}

```

Failed (400)
```

{
  data
}

```

### Remove Folder

#### Response

Success (200)
```

{
  "success": true,
  "message": "Berhasil menghapus folder, id: 4",
}

```

Failed (400)
```

{
  data
}

```

### Get Root Folders

#### Response

Success (200)
```

{
  "success": true,
  "message": "Berhasil menampilkan data seluruh root folder",
  "data": [
    {
      "id": 1,
      "name": "Documents",
      "as_root": true,
      "created_at": "2025-08-13T01:31:44.217Z",
      "updated_at": "2025-08-13T01:31:44.217Z"
    },
    {
      "id": 2,
      "name": "Pictures",
      "as_root": true,
      "created_at": "2025-08-13T01:31:44.221Z",
      "updated_at": "2025-08-13T01:31:44.221Z"
    },
    {
      "id": 3,
      "name": "Music",
      "as_root": true,
      "created_at": "2025-08-13T01:31:44.222Z",
      "updated_at": "2025-08-13T01:31:44.222Z"
    },
    {
      "id": 4,
      "name": "Videos",
      "as_root": true,
      "created_at": "2025-08-13T01:31:44.223Z",
      "updated_at": "2025-08-13T01:31:44.223Z"
    },
    {
      "id": 5,
      "name": "School",
      "as_root": true,
      "created_at": "2025-08-13T01:31:44.224Z",
      "updated_at": "2025-08-13T01:31:44.224Z"
    }
  ]
}

```

### Get Folders As Tree

### Get Sub Folders and Files

#### Response

Success (200)
```

{
    "success": true,
    "message": "Request success",
    "data": [
        {
            "id": 9,
            "parent_folder_id": 3,
            "name": "Folder (3.1)",
            "path": null,
            "extension": null,
            "size_kilobyte": null,
            "created_at": "2025-08-14T07:25:52.070Z",
            "updated_at": "2025-08-14T07:25:52.070Z",
            "source_table": "folder_table"
        }
    ]
}

```
### Rename Folder

#### Response

Success (200)
```

{
  "success": true,
  "message": "Berhasil mengganti nama folder, id: 36",
  "data": {
    "id": 36,
    "name": "New Folder renamed",
    "created_at": "2025-08-13T17:02:28.200Z",
    "updated_at": "2025-08-13T17:11:06.071Z"
  }
}

```

### Move Folder

### Search Folders and Files

## File

### Create Files

### Remove Files

### Update File

### Rename File
