<?php
/**
 * @ DB.class.php 
 * @ zmouse@vip.qq.com
 */

defined('IN_APP') or exit('Denied Access!');

class DB {

	public static function factory($db_type = 'mysql') {
		global $_CONFIGS;
		$class_name = 'DB_' . ucfirst($db_type);
		$class_file = CLASS_PATH .$class_name . '.class.php';
		if (file_exists($class_file)) {
			require_once(CLASS_PATH . 'DBInterface.class.php');
			require_once($class_file);
			if (class_exists($class_name)) {
				//实例DB对象
				return $class_name::instance($_CONFIGS['db']);
			} else {
				exit("Driver class {{$class_name}} is not undefined!");
			}
		} else {
			exit("Driver file {{$class_name}} is not found!");
		}
	}

}