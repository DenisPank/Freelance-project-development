<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2014.2.0.284
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Отправка logoekb.upidea.',
	'heading' => 'Отправка новой формы',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Отмечено',
		'checkbox_unchecked' => 'Флажок не установлен',
		'submitted_from' => 'Формы, отправленные с веб-сайта: %s',
		'submitted_by' => 'IP-адрес посетителя: %s',
		'too_many_submissions' => 'Недопустимо высокое количество отправок с этого IP-адреса за последнее время',
		'failed_to_send_email' => 'Не удалось отправить сообщение эл. почты',
		'invalid_reCAPTCHA_private_key' => 'Недействительный закрытый ключ reCAPTCHA.',
		'invalid_field_type' => 'Неизвестный тип поля \'%s\'.',
		'unknown_method' => 'Неизвестный метод запроса сервера'
	),
	'email' => array(
		'from' => '2192718@gmail.com',
		'to' => '2192718@gmail.com'
	),
	'fields' => array(
		'custom_U9287' => array(
			'type' => 'string',
			'label' => 'Имя',
			'required' => true,
			'errors' => array(
				'required' => 'Поле \'Имя\' не может быть пустым.'
			)
		),
		'Email' => array(
			'type' => 'email',
			'label' => 'Удалить Электронная почта',
			'required' => true,
			'errors' => array(
				'required' => 'Поле \'Удалить Электронная почта\' не может быть пустым.',
				'format' => 'Поле \'Удалить Электронная почта\' содержит недействительное сообщение эл. почты.'
			)
		),
		'custom_U9291' => array(
			'type' => 'string',
			'label' => 'Сотовый телефон',
			'required' => true,
			'errors' => array(
				'required' => 'Поле \'Сотовый телефон\' не может быть пустым.'
			)
		)
	)
);

process_form($form);
?>
