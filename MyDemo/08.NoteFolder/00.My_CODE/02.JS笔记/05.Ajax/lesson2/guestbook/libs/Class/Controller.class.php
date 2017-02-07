<?php
/**
 * @ Controller.class.php
 * @ zmouse@vip.qq.com
 */

defined('IN_APP') or exit('Denied Aeecss!');

require(CLASS_PATH . 'DB.class.php');

class Controller {

	protected $db = null;
	private $ajaxData = array(
		'code'	=>	0,
		'message'	=>	''
	);

	public function __construct() {
		$this->db = DB::factory('mysql');
	}

	final protected function sendByAjax($data=array(), $end=true) {
		if (is_array($data)) {
			$return_data = array_merge($this->ajaxData, $data);
		} else {
			$return_data = $data;
		}
		echo json_encode($return_data);
		$end && exit();
	}

}