define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "获取导航分类",
    "name": "GetNavCategory",
    "group": "Nav",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"导航的分类数据\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/home"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "Nav"
  },
  {
    "type": "get",
    "url": "/todu/addlist",
    "title": "添加单个",
    "name": "addlist",
    "group": "Nav",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"导航的分类数据\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/todulist.js",
    "groupTitle": "Nav"
  },
  {
    "type": "get",
    "url": "/todu/updatalist",
    "title": "更改",
    "name": "addlist",
    "group": "Nav",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"导航的分类数据\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/todulist.js",
    "groupTitle": "Nav"
  },
  {
    "type": "get",
    "url": "/todu/getlist",
    "title": "获取",
    "name": "addlist",
    "group": "Nav",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"导航的分类数据\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/todulist.js",
    "groupTitle": "Nav"
  },
  {
    "type": "get",
    "url": "/todu/upload",
    "title": "上传文件",
    "name": "addlist",
    "group": "Nav",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"导航的分类数据\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/todulist.js",
    "groupTitle": "Nav"
  },
  {
    "type": "get",
    "url": "/todu/addslist",
    "title": "添加多个",
    "name": "addslist",
    "group": "Nav",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"导航的分类数据\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/todulist.js",
    "groupTitle": "Nav"
  },
  {
    "type": "get",
    "url": "/todu/delete",
    "title": "删除",
    "name": "delete",
    "group": "Nav",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"导航的分类数据\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/todulist.js",
    "groupTitle": "Nav"
  }
] });
