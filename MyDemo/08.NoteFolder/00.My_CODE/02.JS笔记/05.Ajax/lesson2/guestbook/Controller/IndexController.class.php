<?php
/**
 * @ controller Index.class.php
 * @ zmouse@vip.qq.com
 */

defined('IN_APP') or exit('Denied Access!');

class IndexController extends Controller {

	public function index() {
		echo '<p>欢迎</p>';
		//$result = $this->db->get("select * from users", 1);
		//dump($result);
	}

	/**
	 * @ interface 用户名验证
	 */
	public function verifyUserName() {
		
		$username = trim(isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
		
		switch ($this->_verifyUserName($username)) {
			case 0:
				$this->sendByAjax(array('message'=>'恭喜你，该用户名可以注册！'));
				break;
			case 1:
				$this->sendByAjax(array('code'=>1,'message'=>'用户名长度不能小于3个或大于16个字符！'));
				break;
			case 2:
				$this->sendByAjax(array('code'=>2,'message'=>'对不起，该用户名已经被注册了！'));
				break;
			default:
				break;
		}
		
	}

	/**
	 * @ interface 用户注册
	 */
	public function reg() {
		$username = trim(isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
		$password = trim(isset($_REQUEST['password']) ? $_REQUEST['password'] : '');
		$avatar = trim(isset($_REQUEST['avatar']) && in_array($_REQUEST['avatar'], array(1,2,3,4,5,6,7,8,9)) ? intval($_REQUEST['avatar']) : 1);

		if ($this->_verifyUserName($username) !== 0 || strlen($password)<3 || strlen($password) > 20) {
			$this->sendByAjax(array('code'=>1,'message'=>'注册失败！'));
		}
		$password = md5($password);
		if (false === $this->db->query("INSERT INTO `users` (`username`, `password`, `avatar`) VALUES ('{$username}', '{$password}', {$avatar})")) {
			$this->sendByAjax(array('code'=>1,'message'=>'注册失败！'));
		} else {
			$this->sendByAjax(array('message'=>'注册成功！'));
		}
	}


	/**
	 * @ 用户登陆
	 */
	public function login() {
		$username = trim(isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
		$password = trim(isset($_REQUEST['password']) ? $_REQUEST['password'] : '');

		if (isset($_COOKIE['uid'])) {
			$this->sendByAjax(array('code'=>1,'message'=>'你已经登陆过了！'));
		}

		if ($rs = $this->db->get("SELECT * FROM `users` WHERE `username`='{$username}'")) {
			if ($rs['password'] != md5($password)) {
				$this->sendByAjax(array('code'=>1,'message'=>'登陆失败！'));
			} else {
				setcookie('uid', $rs['uid'], time() + 3600*60, '/');
				setcookie('username', $rs['username'], time() + 3600*60, '/');
				$this->sendByAjax(array('code'=>0,'message'=>'登陆成功！'));
			}
		} else {
			$this->sendByAjax(array('code'=>1,'message'=>'登陆失败！'));
		}
	}

	/**
	 * @ 用户退出
	 */
	public function logout() {
		if (!isset($_COOKIE['uid'])) {
			$this->sendByAjax(array('code'=>1,'message'=>'你还没有登陆！'));
		} else {
			setcookie('uid', 0, time() - 3600*60, '/');
			$this->sendByAjax(array('code'=>0,'message'=>'退出成功！'));
		}
	}

	/**
	 * 用户留言保存
	 */
	public function send() {
		if (!isset($_COOKIE['uid'])) {
			$this->sendByAjax(array('code'=>1,'message'=>'你还没有登陆！'));
		} else {
			$content = trim(isset($_POST['content']) ? $_POST['content'] : '');
			if (empty($content)) {
				$this->sendByAjax(array('code'=>1,'message'=>'留言内容不能为空！'));
			}
			$dateline = time();
			$this->db->query("INSERT INTO `contents` (`uid`, `content`, `dateline`) VALUES ({$_COOKIE['uid']}, '{$content}', {$dateline})");
			$returnData = array(
				'cid'		=>	$this->db->getInsertId(),
				'uid'		=>	$_COOKIE['uid'],
				'username'	=>	$_COOKIE['username'],
				'content'	=>	$content,
				'dateline'	=>	$dateline,
				'support'	=>	0,
				'oppose'	=>	0,
			);
			$this->sendByAjax(array('code'=>0,'message'=>'留言成功！','data'=>$returnData));
		}
	}

	/**
	 * @ 顶
	 */
	public function doSupport() {
		if (!isset($_COOKIE['uid'])) {
			$this->sendByAjax(array('code'=>1,'message'=>'你还没有登陆！'));
		} else {
			$cid = isset($_REQUEST['cid']) ? intval($_REQUEST['cid']) : 0;
			if (!$cid) $this->sendByAjax(array('code'=>1,'message'=>'无效留言cid！'));
			$content = $this->db->get("SELECT cid FROM `contents` WHERE `cid`={$cid}");
			if (!$content) $this->sendByAjax(array('code'=>1,'message'=>'不存在的留言cid！'));
			$this->db->query("UPDATE `contents` SET `support`=support+1 WHERE `cid`={$cid}");
			$this->sendByAjax(array('code'=>0,'message'=>'顶成功！'));
		}
	}

	/**
	 * @ 踩
	 */
	public function doOppose() {
		if (!isset($_COOKIE['uid'])) {
			$this->sendByAjax(array('code'=>1,'message'=>'你还没有登陆！'));
		} else {
			$cid = isset($_REQUEST['cid']) ? intval($_REQUEST['cid']) : 0;
			if (!$cid) $this->sendByAjax(array('code'=>1,'message'=>'无效留言cid！'));
			$content = $this->db->get("SELECT cid FROM `contents` WHERE `cid`={$cid}");
			if (!$content) $this->sendByAjax(array('code'=>1,'message'=>'不存在的留言cid！'));
			$this->db->query("UPDATE `contents` SET `oppose`=oppose+1 WHERE `cid`={$cid}");
			$this->sendByAjax(array('code'=>0,'message'=>'踩成功！'));
		}
	}

	/**
	 * @ 获取留言列表
	 */
	public function getList() {
		$page = isset($_REQUEST['page']) ? intval($_REQUEST['page']) : 1;	//当前页数
		$n = isset($_REQUEST['n']) ? intval($_REQUEST['n']) : 10;	//每页显示条数
		//获取总记录数
		$result_count = $this->db->get("SELECT count('cid') as count FROM `contents`");
		$count = $result_count['count'] ? (int) $result_count['count'] : 0;
		if (!$count) {
			$this->sendByAjax(array('code'=>1,'message'=>'还没有任何留言！'));
		}
		$pages = ceil($count / $n);
		if ($page > $pages) {
			$this->sendByAjax(array('code'=>2,'message'=>'没有数据了！'));
		}
		$start = ( $page - 1 ) * $n;
		$result = $this->db->select("SELECT c.cid,c.uid,u.username,c.content,c.dateline,c.support,c.oppose FROM `contents` as c, `users` as u WHERE u.uid=c.uid ORDER BY c.cid DESC LIMIT {$start},{$n}");
		$data = array(
			'count'	=>	$count,
			'pages'	=>	$pages,
			'page'	=>	$page,
			'n'		=>	$n,
			'list'	=>	$result
		);
		$this->sendByAjax(array('code'=>0,'message'=>'','data'=>$data));
	}

	/**
	 * @ 用户名验证
	 */
	private function _verifyUserName($username='') {
		if (strlen($username) < 3 || strlen($username) > 16) {
			return 1;
		}
		$rs = $this->db->get("SELECT `username` FROM `users` WHERE `username`='{$username}'");
		if ($rs) return 2;
		return 0;
	}
}