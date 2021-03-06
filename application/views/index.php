<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="app"></div>

    <script>
        window.base_url = 'http://ai_proj.com';
        window._user = {name: 'melvinlin'};
        window._navData = [
            {
                name: '文章管理',
                menuid: '_admin_home',
                active: '',
                iconClass: 'fa-home',
                sort: 102,
                path: '/admin/taskList',
                routeName: 'taskList'
            },
            {
                name: '统计分析',
                menuid: 'statistics',
                active: '',
                iconClass: 'fa-home',
                sort: 10,
                path: '',
                dropdown: [
                    {
                        name: '访问记录',
                        menuid: '_admin_pageviewList',
                        active: '',
                        sort: 0,
                        routeName: 'pageviewList',
                        path: '/admin/pageviewList'
                    }
                ]
            }
        ]
    </script>
<script type="text/javascript" src="<?php echo base_url();?>dist/dev/bundle.js"></script></body>
</html>