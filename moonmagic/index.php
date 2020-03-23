<?php
// $folders = 142;
// $path = dirname(__FILE__).DIRECTORY_SEPARATOR.'images';
// try{
// 	mkdir($path);
// }catch( Exp $e){}
// for ($i=1; $i < $folders; $i++) {
//  	try{
//  		mkdir($path.DIRECTORY_SEPARATOR.$i);
//  	}catch(Exp $e){}
//  } 
function csv_to_array($filename='', $delimiter=',')
{
    if(!file_exists($filename) || !is_readable($filename))
        return FALSE;

    $header = NULL;
    $data = array();
    if (($handle = fopen($filename, 'r')) !== FALSE)
    {
        while (($row = fgetcsv($handle, 1000, $delimiter)) !== FALSE)
        {
            if(!$header)
                $header = $row;
            else
                $data[] = array_combine($header, $row);
        }
        fclose($handle);
    }
    return $data;
}
$filename = dirname(__FILE__).DIRECTORY_SEPARATOR.'list.csv';
$filedata = csv_to_array($filename, ',');
$arrayout = array();
$counter = 1;
foreach ($filedata as $data) {
	$index = $data["product_page"];
	unset($data["product_page"]);
	if(!isset($arrayout[$index])){
		$arrayout[$index] = array();
	}

	$data['from'] = str_replace('https://cdn.shopify.com/s/files/', '', $data['from']);
	$arrayout[$index][] = $data;
}
$out_array_js = array();
// foreach ($arrayout as $cnt => $array) {
// 	foreach ($array as $key => $dt) {
// 		$to           = $dt['to'];
// 		preg_match('/https:\/\/www.dropbox.com\/.*&preview=/', $to, $output_array);
// 		if(!empty($output_array)){
// 			$to = str_replace($output_array[0], '/'.$counter.'/', $to);
// 			$dt['to'] = $to;
// 		}
// 		// $arrayout[$cnt][$key] = $dt;
// 		$arrayout[$cnt][$key] = $dt;
// 	}
// 	$counter++;
// }
ob_start();
echo '<body>';
foreach ($arrayout as $key => $value) {
	echo '<div>';
	echo $key.'<br>';
	echo $counter.'<br>';
	foreach ($value as $val) {
		echo '<a href="'.$val['to'].'" target="_blank">'.$val['to'].'</a>'.'<br>';
	}
	echo '</div>'.'<br>';
	$counter++;
}
echo '</body>';
// var_dump($arrayout);
$file_content = ob_get_contents();
ob_end_clean();
$file = fopen('outscaner.html', 'w+');
fwrite($file, $file_content);
fclose($file);
?>