<?php
/**
 * @ common.php
 * @ zmouse@vip.qq.com - miaov.com
 */

//定义app基本常量
define('APP_VERSION', '1.0');

if (!defined('APP_PATH')) define('APP_PATH', substr(dirname(__FILE__), 0, -4));

define('CONFIG_APP', APP_PATH . 'config/');	//config目录
define('LIBS_PATH', APP_PATH . 'libs/');	//libs目录
define('CLASS_PATH', LIBS_PATH . 'Class/');	//class目录
define('FUNCTION_PATH', LIBS_PATH . 'Function/');	//function目录
define('CONTROLLER_PATH', APP_PATH . 'Controller/');	//控制器目录

//默认Module
define('DEFAULT_MODULE_NAME', 'Index');
//默认Action
define('DEFAULT_ACTION_NAME', 'index');

//header('Access-Control-Allow-Origin:*');//如果涉及跨域请求的话请加上这一句
header('Content-type:text/html; charset="utf-8"');

if ( version_compare(PHP_VERSION, '5.3.0', '<') ) {
	exit('PHP 版本太低了！！');
}

require(CONFIG_APP . 'config.php');

require(FUNCTION_PATH . 'common.php');

class App {

	static function run() {
		//当前module
		define('MODULE_NAME', isset($_REQUEST['m']) && !empty($_REQUEST['m']) ? $_REQUEST['m'] : DEFAULT_MODULE_NAME);
		//当前action
		define('ACTION_NAME', isset($_REQUEST['a']) && !empty($_REQUEST['a']) ? $_REQUEST['a'] : DEFAULT_ACTION_NAME);

		require_once(CLASS_PATH . 'Controller.class.php');

		//echo '当前模块：' . MODULE_NAME . '<br />' . '当前动作：' . ACTION_NAME;
		$class_name = $class_file_name = ucfirst(MODULE_NAME) . 'Controller';
		$class_file = CONTROLLER_PATH . $class_file_name . '.class.php';

		//检测控制文件是否存在
		if (!file_exists($class_file)) exit("控制器文件 $class_file 不存在!");

		require_once($class_file);

		//检测控制器类是否存在
		if (!class_exists($class_name)) exit("控制器类 $class_name 不存在!");
		$Class = new $class_name;

		//检测控制类方法是否存在
		$class_method = ACTION_NAME;
		if (!method_exists($Class, $class_method)) exit("控制器方法 $class_method 不存在!");

		//调用控制器类方法
		call_user_func(array($Class, $class_method));
	}
}

App::run();
