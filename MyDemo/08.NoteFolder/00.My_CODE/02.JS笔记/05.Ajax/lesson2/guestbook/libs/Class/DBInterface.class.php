<?php
/**
 * @ DBInterface.class.php
 * @ zmouse@vip.qq.com
 */

defined('IN_APP') or exit('Denied Access!');

interface DBInterface {

	//实例化接口
	static function instance($config);
	//链接数据库
	public function connect();
	//查询数据库
	public function query($sql);
	//获取多条记录
	public function select($sql);
	//获取一条记录
	public function get($sql);
	//获取上一次insert的id
	public function getInsertId();
	
}